import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true, // 开启本地开发时的 D1/KV 模拟
    },
    mode: 'directory',
  }),
  site: "https://yoursite.com",
  /*
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: [400, 500],
      }
    ],
  },
  */
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});