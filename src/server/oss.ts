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
//返回成功示例
// {
//   "success": true,
//   "name": "1766152414047-beauty-8870258_1280.png",
//   "url": "https://imgfx.oss-cn-shanghai.aliyuncs.com/1766152414047-beauty-8870258_1280.png",
//   "data": {
//     "name": "1766152414047-beauty-8870258_1280.png",
//     "url": "https://imgfx.oss-cn-shanghai.aliyuncs.com/1766152414047-beauty-8870258_1280.png",
//     "res": {
//       "status": 200,
//       "statusCode": 200,
//       "statusMessage": "OK",
//       "headers": {
//         "server": "AliyunOSS",
//         "date": "Fri, 19 Dec 2025 13:53:33 GMT",
//         "content-length": "0",
//         "connection": "keep-alive",
//         "x-oss-request-id": "694558DD9082053235AE287C",
//         "etag": "\"66C732559760C5BDF1218DCBCBC9E2BB\"",
//         "x-oss-hash-crc64ecma": "10354808817510581238",
//         "content-md5": "ZscyVZdgxb3xIY3Ly8niuw==",
//         "x-oss-server-time": "97"
//       },
//       "size": 0,
//       "aborted": false,
//       "rt": 359,
//       "keepAliveSocket": false,
//       "data": {
//         "type": "Buffer",
//         "data": []
//       },
//       "requestUrls": [
//         "https://imgfx.oss-cn-shanghai.aliyuncs.com/1766152414047-beauty-8870258_1280.png"
//       ],
//       "timing": null,
//       "remoteAddress": "106.14.228.159",
//       "remotePort": 443,
//       "socketHandledRequests": 1,
//       "socketHandledResponses": 1
//     }
//   }
// }
