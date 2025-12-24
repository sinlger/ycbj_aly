
const VISION_ENDPOINT = 'imageseg.cn-shanghai.aliyuncs.com';
// const OSS_REGION = 'cn-shanghai';

// HMAC-SHA1 签名（Web Crypto）
async function hmacSha1(key: string, data: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyBuf = encoder.encode(key);
  const dataBuf = encoder.encode(data);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyBuf,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, dataBuf);
  // 转为 Base64
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

// 主函数：调用通用分割（抠图）
export async function segmentCommonImage(env: any, imageUrl: string, returnForm?: string) {
  // 确保环境变量存在
  if (!env.ALIBABA_CLOUD_ACCESS_KEY_ID || !env.ALIBABA_CLOUD_ACCESS_KEY_SECRET) {
    throw new Error('Missing OSS credentials');
  }
  if (!imageUrl.startsWith('http')) {
    throw new Error('imageUrl must be a valid URL');
  }

  const params: Record<string, string> = {
    Action: 'SegmentCommonImage',
    ImageURL: imageUrl,
    Format: 'JSON',
    Version: '2019-12-30',
    AccessKeyId: env.ALIBABA_POWER_ACCESS_KEY_ID,
    SignatureMethod: 'HMAC-SHA1',
    Timestamp: new Date().toISOString(), // ISO 8601 UTC
    SignatureVersion: '1.0',
    SignatureNonce: crypto.randomUUID().replace(/-/g, ''), // 去掉横线
    // 视觉智能开放平台通常部署在上海，RegionId 固定为 cn-shanghai
    RegionId: 'cn-shanghai',
  };

  // 如果有 returnForm 参数，且不是默认/通用分割，则添加到请求中
  console.log('returnForm:', returnForm);
  if (returnForm && !['default', 'common', 'null', 'undefined'].includes(returnForm)) {
    params.ReturnForm = returnForm;
  }

  // 按 key 字典序排序
  const sortedKeys = Object.keys(params).sort();
  const canonicalizedQuery = sortedKeys
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  // 构造待签名字符串（GET&%2F&...）
  const stringToSign = `GET&%2F&${encodeURIComponent(canonicalizedQuery)}`;

  // 注意：签名密钥 = AccessKeySecret + '&'
  const signature = await hmacSha1(`${env.ALIBABA_POWER_ACCESS_KEY_SECRET}&`, stringToSign);

  // 构建最终 URL
  const url = `https://${VISION_ENDPOINT}/?${canonicalizedQuery}&Signature=${encodeURIComponent(signature)}`;

  // 发起请求
  const res = await fetch(url, { method: 'GET' });

  if (!res.ok) {
    const text = await res.text();
    console.error('Vision API error response:', text);
    throw new Error(`Vision API ${res.status}: ${text}`);
  }

  const data = await res.json();

  // 检查是否包含 Data 和 ImageURL (根据用户反馈的实际返回结构)
  if (data.Data && data.Data.ImageURL) {
    return {
      maskUrl: data.Data.ImageURL,
      requestId: data.RequestId,
    };
  }

  // 如果没有成功数据，抛出错误
  throw new Error(`Segmentation failed: ${data.Message || JSON.stringify(data)}`);
}
// 请求成功示例

// {
// "RequestId":"0D42F32A-D01E-51C5-812B-EB94CD328215"
// "Data":{
// "ImageURL":"http://vibktprfx-prod-prod-damo-eas-cn-shanghai.oss-cn-shanghai.aliyuncs.com/seg-common-image/2025-12-20/d1893c9d-86ba-42d4-94b8-52d4d9242edf/image.png?Expires=1766205645&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRpDvh1&Signature=********************************"
// }
// }