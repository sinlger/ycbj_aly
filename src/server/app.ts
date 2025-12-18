import { Hono } from 'hono';

// 定义环境变量类型
type Bindings = {
  ALIBABA_CLOUD_ACCESS_KEY_ID: string;
  ALIBABA_CLOUD_ACCESS_KEY_SECRET: string;
};

export const app = new Hono<{ Bindings: Bindings }>().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!',
    timestamp: new Date().toISOString()
  });
});

app.post('/upload', async (c) => {
  // 1. 接收图片
  // 2. 调用 oss.ts 上传
  // 3. 调用 aliyun.ts 处理
  return c.json({ success: true });
});