import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

// Helper to create S3 Client
function getClient(env: any) {
  if (!env.ALIBABA_CLOUD_ACCESS_KEY_ID || !env.ALIBABA_CLOUD_ACCESS_KEY_SECRET) {
    throw new Error('Missing OSS credentials');
  }
  
  // Construct endpoint manually to ensure it points to Aliyun OSS
  // env.OSS_REGION typically is like 'oss-cn-shanghai'
  const region = env.OSS_REGION || 'oss-cn-shanghai';
  const endpoint = `https://${region}.aliyuncs.com`;

  return new S3Client({
    region: region,
    endpoint: endpoint,
    credentials: {
      accessKeyId: env.ALIBABA_CLOUD_ACCESS_KEY_ID,
      secretAccessKey: env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    },
    forcePathStyle: false, // OSS supports virtual-hosted style
  });
}

// HMAC-SHA1 signature for manual OSS URL generation
async function hmacSha1(key: string, data: string) {
  const encoder = new TextEncoder();
  const keyBuf = encoder.encode(key);
  const dataBuf = encoder.encode(data);
  const cryptoKey = await crypto.subtle.importKey(
      'raw', keyBuf, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, dataBuf);
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

export async function uploadToOss(env: any, file: File, fileName: string) {
  const client = getClient(env);
  const arrayBuffer = await file.arrayBuffer();
  
  // Use Uint8Array which is compatible with AWS SDK
  const body = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: env.OSS_BUCKET,
    Key: fileName,
    Body: body,
    ContentType: file.type,
    ACL: 'private', // Match original logic
    Metadata: {
      'x-oss-forbid-overwrite': 'false'
    }
  });

  try {
    const result = await client.send(command);
    return {
      name: fileName,
      res: {
        status: 200, // Mock status
        headers: result.$metadata.httpHeaders
      },
      ...result
    };
  } catch (e) {
    console.error('OSS Upload Error:', e);
    throw e;
  }
}

// 获取 OSS 文件的签名 URL (用于传给 Vision API)
// 改用阿里云原生签名算法，避免 AWS SDK 兼容性问题
export async function getOssSignatureUrl(env: any, fileName: string) {
  const bucket = env.OSS_BUCKET;
  const region = env.OSS_REGION || 'oss-cn-shanghai';
  
  const expires = Math.floor(Date.now() / 1000) + 1800; // 30 mins
  const resource = `/${bucket}/${fileName}`;
  const stringToSign = `GET\n\n\n${expires}\n${resource}`;
  const signature = await hmacSha1(env.ALIBABA_CLOUD_ACCESS_KEY_SECRET, stringToSign);
  
  // 构造标准 OSS 签名 URL
  // 格式: https://bucket.region.aliyuncs.com/object?OSSAccessKeyId=...&Expires=...&Signature=...
  const url = `https://${bucket}.${region}.aliyuncs.com/${fileName}?OSSAccessKeyId=${env.ALIBABA_CLOUD_ACCESS_KEY_ID}&Expires=${expires}&Signature=${encodeURIComponent(signature)}`;
  
  return url;
}

// 从 OSS 获取文件流 (用于后端代理)
export async function getOssFile(env: any, fileName: string) {
  const client = getClient(env);
  const command = new GetObjectCommand({
    Bucket: env.OSS_BUCKET,
    Key: fileName,
  });

  try {
    const response = await client.send(command);
    if (!response.Body) {
      throw new Error('Empty body');
    }
    // Return ReadableStream or Uint8Array. 
    // transformToByteArray is available in newer SDK versions and works in Workers
    return await response.Body.transformToByteArray();
  } catch (e) {
    console.error('OSS Get Error:', e);
    throw e;
  }
}

// 下载 URL 内容并上传到 OSS
export async function saveUrlToOss(env: any, url: string, fileName: string) {
  // 下载内容
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch URL: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  const body = new Uint8Array(arrayBuffer);

  const client = getClient(env);
  const command = new PutObjectCommand({
    Bucket: env.OSS_BUCKET,
    Key: fileName,
    Body: body,
    ACL: 'private',
  });

  const result = await client.send(command);
  return {
    name: fileName,
    res: { status: 200 },
    ...result
  };
}
