import OSS from 'ali-oss';

export async function uploadToOss(env: any, file: File, fileName: string) {
  // 确保环境变量存在
  if (!env.ALIBABA_CLOUD_ACCESS_KEY_ID || !env.ALIBABA_CLOUD_ACCESS_KEY_SECRET) {
    throw new Error('Missing OSS credentials');
  }

  const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: env.OSS_REGION,
    // 从环境变量中获取访问凭证。
    accessKeyId: env.ALIBABA_CLOUD_ACCESS_KEY_ID,
    accessKeySecret: env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    authorizationV4: true,
    // 填写Bucket名称。
    bucket: env.OSS_BUCKET,
    // 如果在 Cloudflare Workers 中运行，建议使用 secure: true
    secure: true,
  });

  // 自定义请求头
  const headers = {
    // 指定Object的存储类型。
    'x-oss-storage-class': 'Standard',
    // 指定Object的访问权限。
    'x-oss-object-acl': 'public-read', // 通常图片上传后需要公开访问，改为 public-read，或者保持 private
    // 指定PutObject操作时是否覆盖同名目标Object。
    'x-oss-forbid-overwrite': 'false', 
  };

  try {
    // 将 File 转为 Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 上传
    // 填写OSS文件完整路径
    const result = await client.put(fileName, buffer, { headers });
    return result;
  } catch (e) {
    console.error('OSS Upload Error:', e);
    throw e;
  }
}
