import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';
import { uploadToOss, getOssFile, getOssSignatureUrl, saveUrlToOss } from './oss';
import { segmentCommonImage } from './vision';

// 定义环境变量类型
type Bindings = {
  ALIBABA_CLOUD_ACCESS_KEY_ID: string;
  ALIBABA_CLOUD_ACCESS_KEY_SECRET: string;
  ALIBABA_POWER_ACCESS_KEY_ID: string;
  ALIBABA_POWER_ACCESS_KEY_SECRET: string;
  OSS_REGION?: string;
  OSS_BUCKET?: string;
};

// 使用 OpenAPIHono
export const app = new OpenAPIHono<{ Bindings: Bindings }>();

// 设置基础路径，这样所有路由都会加上 /api 前缀 (注意：doc 和 reference 也会受影响，需要调整路径)
// 为了简单起见，我们在 createRoute 中不写 /api，但在 request handler 中 Hono 会处理 basePath
// 但是 app.doc 会挂载在 /api/doc
// app.basePath('/api');

// --- Routes Definition ---

// 1. Hello Route
const helloRoute = createRoute({
  method: 'get',
  path: '/api/hello',
  responses: {
    200: {
      description: 'Respond a message',
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
            timestamp: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(helloRoute, (c) => {
  return c.json({
    message: 'Hello from Hono!',
    timestamp: new Date().toISOString()
  });
});

// 1.5 Image Proxy Route
const imageProxyRoute = createRoute({
  method: 'get',
  path: '/api/image/:key',
  request: {
    params: z.object({
      key: z.string().openapi({ description: 'Image Key (Filename)' }),
    }),
  },
  responses: {
    200: {
      description: 'Image Content',
      content: {
        'image/*': {
          schema: z.string().openapi({ format: 'binary' }),
        },
      },
    },
    404: { description: 'Not Found' },
    500: { description: 'Server Error' },
  },
});

app.openapi(imageProxyRoute, async (c) => {
  try {
    const key = c.req.param('key');
    const content = await getOssFile(c.env, key);
    
    // Determine content type (simple check)
    let contentType = 'application/octet-stream';
    if (key.endsWith('.png')) contentType = 'image/png';
    else if (key.endsWith('.jpg') || key.endsWith('.jpeg')) contentType = 'image/jpeg';
    else if (key.endsWith('.webp')) contentType = 'image/webp';

    return c.body(content, 200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000', // Cache for performance
    });
  } catch (e) {
    console.error('Proxy Error:', e);
    return c.json({ error: 'Image not found or error' }, 404);
  }
});

// 2. Upload Route
const uploadRoute = createRoute({
  method: 'post',
  path: '/api/upload',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z.object({
            file: z.instanceof(File).openapi({
              type: 'string',
              format: 'binary',
              description: 'File to upload'
            }),
            returnForm: z.enum(['mask', 'whiteBK', 'crop']).optional().openapi({
              description: 'Return form of the segmented image',
              example: 'crop',
              default: 'crop'
            }),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload and Segment success',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            name: z.string().optional(),
            url: z.string().optional(),
            maskUrl: z.string().optional(),
            requestId: z.string().optional(),
            data: z.any().optional(),
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            error: z.string(),
          }),
        },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            error: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(uploadRoute, async (c) => {
  try {
    const body = await c.req.parseBody();
    const file = body['file'];
    const returnForm = body['returnForm'] as string | undefined;

    if (!file || !(file instanceof File)) {
      return c.json({ success: false, error: 'No file uploaded' }, 400);
    }

    // 生成文件名
    const fileName = `${Date.now()}-${file.name}`;
    
    // 上传到 OSS (Private)
    const result = await uploadToOss(c.env, file, fileName);
    // result.url is raw OSS URL, we won't use it directly for public access anymore.
    
    // 生成签名 URL 用于 Vision API
    const signedUrl = getOssSignatureUrl(c.env, fileName);

    // 自动调用分割接口
    let maskUrl: string | undefined;
    let requestId: string | undefined;

    if (signedUrl) {
      try {
        const segmentResult = await segmentCommonImage(c.env, signedUrl, returnForm);
        // segmentResult.maskUrl 是 Vision API 返回的临时链接
        
        if (segmentResult.maskUrl) {
            // 下载 mask 并转存到 OSS (Private)
            // 假设结果是 PNG (通常是)
            const maskFileName = `processed-${Date.now()}.png`; 
            
            await saveUrlToOss(c.env, segmentResult.maskUrl, maskFileName);
            maskUrl = `/api/image/${maskFileName}`; // 使用代理地址
        }
        requestId = segmentResult.requestId;
      } catch (segmentError: any) {
        console.error('Auto-segmentation failed:', segmentError);
      }
    }

    return c.json({ 
      success: true, 
      name: (result as any).name || fileName,
      url: `/api/image/${fileName}`, // 原图代理地址
      maskUrl: maskUrl, // 结果图代理地址
      requestId: requestId,
      data: result 
    });
  } catch (e: any) {
    console.error(e);
    return c.json({ success: false, error: e.message || 'Upload failed' }, 500);
  }
});

// 3. Segment Route
const segmentRoute = createRoute({
  method: 'post',
  path: '/api/segment',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            imageUrl: z.string().url().openapi({
              description: 'Image URL to segment',
              example: 'https://imgfx.oss-cn-shanghai.aliyuncs.com/1766152414047-beauty-8870258_1280.png'
            }),
            returnForm: z.enum(['mask', 'whiteBK', 'crop']).optional().openapi({
              description: 'Return form of the segmented image',
              example: 'crop',
              default: 'crop'
            }),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Segmentation success',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            maskUrl: z.string().optional(),
            requestId: z.string().optional(),
          }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            error: z.string(),
          }),
        },
      },
    },
    500: {
      description: 'Server Error',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            error: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(segmentRoute, async (c) => {
  try {
    const { imageUrl, returnForm } = await c.req.json();
    
    if (!imageUrl) {
      return c.json({ success: false, error: 'imageUrl is required' }, 400);
    }

    const result = await segmentCommonImage(c.env, imageUrl, returnForm);

    return c.json({ 
      success: true, 
      maskUrl: result.maskUrl,
      requestId: result.requestId
    });
  } catch (e: any) {
    console.error('Segment Error:', e);
    return c.json({ success: false, error: e.message || 'Segmentation failed' }, 500);
  }
});

// --- Documentation ---

// OpenAPI Specification JSON
app.doc('/api/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Hono API Reference',
    description: 'API documentation for Hono endpoints including OSS upload.',
  },
});

app.get(
  '/api/reference',
  (c) => {
    return c.html(`
      <!doctype html>
      <html>
        <head>
          <title>Hono API Reference</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />
          <style>
            body {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <script
            id="api-reference"
            data-url="/api/doc"
            src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
        </body>
      </html>
    `)
  }
);
