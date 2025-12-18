// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/logo.svg",
    "/og-image.png"
  ]
};

// node_modules/.pnpm/wrangler@4.50.0_@cloudflare+workers-types@4.20251217.0/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "E:\\workSpace\\ali_image\\.wrangler\\tmp\\pages-cmHAgl\\bundledWorker-0.5931100235697511.mjs";
import { isRoutingRuleMatch } from "E:\\workSpace\\ali_image\\node_modules\\.pnpm\\wrangler@4.50.0_@cloudflare+workers-types@4.20251217.0\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "E:\\workSpace\\ali_image\\.wrangler\\tmp\\pages-cmHAgl\\bundledWorker-0.5931100235697511.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=fjbg50o4y55.js.map
