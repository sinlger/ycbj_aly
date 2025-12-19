import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';
import { uploadToOss } from './oss';

// 定义环境变量类型
type Bindings = {
  ALIBABA_CLOUD_ACCESS_KEY_ID: string;
  ALIBABA_CLOUD_ACCESS_KEY_SECRET: string;
  OSS_REGION?: string;
  OSS_BUCKET?: string;
};

// 使用 OpenAPIHono
export const app = new OpenAPIHono<{ Bindings: Bindings }>();

// 设置基础路径，这样所有路由都会加上 /api 前缀 (注意：doc 和 reference 也会受影响，需要调整路径)
// 为了简单起见，我们在 createRoute 中不写 /api，但在 request handler 中 Hono 会处理 basePath
// 但是 app.doc 会挂载在 /api/doc
app.basePath('/api');

// --- Routes Definition ---

// 1. Hello Route
const helloRoute = createRoute({
  method: 'get',
  path: '/hello',
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

// 2. Upload Route
const uploadRoute = createRoute({
  method: 'post',
  path: '/upload',
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
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Upload success',
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            name: z.string().optional(),
            url: z.string().optional(),
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

    if (!file || !(file instanceof File)) {
      return c.json({ success: false, error: 'No file uploaded' }, 400);
    }

    // 生成文件名
    const fileName = `${Date.now()}-${file.name}`;
    
    // 上传到 OSS
    const result = await uploadToOss(c.env, file, fileName);

    return c.json({ 
      success: true, 
      name: (result as any).name || fileName,
      url: (result as any).url,
      data: result 
    });
  } catch (e: any) {
    console.error(e);
    return c.json({ success: false, error: e.message || 'Upload failed' }, 500);
  }
});

// --- Documentation ---

// OpenAPI Specification JSON
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Hono API Reference',
    description: 'API documentation for Hono endpoints including OSS upload.',
  },
});

// Scalar API Reference UI
app.get(
  '/reference',
  apiReference({
    pageTitle: 'Hono API Reference',
    spec: {
      url: '/api/doc',
    },
  })
);
