import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: "https://yoursite.com",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-sans",
        weights: [400, 500],
      }
    ],
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
