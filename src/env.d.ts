/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
type Runtime = import("@astrojs/cloudflare").RuntimeConfig;

declare namespace App {
  interface Locals extends Runtime {
    runtime: {
      env: {
        bgremove: D1Database;
        SESSION: KVNamespace;
      };
    };
  }
}
interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
