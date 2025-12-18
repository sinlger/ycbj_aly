globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_BXD0-EmR.mjs';
import './chunks/astro-designed-error-pages_DKnNj3is.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BIKjDzca.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/workSpace/ali_image/","cacheDir":"file:///E:/workSpace/ali_image/node_modules/.astro/","outDir":"file:///E:/workSpace/ali_image/dist/","srcDir":"file:///E:/workSpace/ali_image/src/","publicDir":"file:///E:/workSpace/ali_image/public/","buildClientDir":"file:///E:/workSpace/ali_image/dist/","buildServerDir":"file:///E:/workSpace/ali_image/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/@astrojs+cloudflare@12.6.12_94725e62a4fb4e13df8b4727c26c343d/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/[...hono]","isIndex":false,"type":"endpoint","pattern":"^\\/api(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"...hono","dynamic":true,"spread":true}]],"params":["...hono"],"component":"src/pages/api/[...hono].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/faq.BoqqColD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://yoursite.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/workSpace/ali_image/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["E:/workSpace/ali_image/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/workSpace/ali_image/src/pages/login.astro",{"propagation":"none","containsHead":true}],["E:/workSpace/ali_image/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["E:/workSpace/ali_image/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["E:/workSpace/ali_image/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/@astrojs+cloudflare@12.6.12_94725e62a4fb4e13df8b4727c26c343d/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/[...hono]@_@ts":"pages/api/_---hono_.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_4-golbWl.mjs","E:/workSpace/ali_image/node_modules/.pnpm/unstorage@1.16.1/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","E:/workSpace/ali_image/node_modules/.pnpm/astro@5.12.6_@types+node@24_e1d1d4a54909b56447ba2a3c6c6127b6/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_MzFFi1g5.mjs","E:/workSpace/ali_image/src/assets/images/Canva.svg?raw":"chunks/Canva_BPq_-xyc.mjs","E:/workSpace/ali_image/src/assets/images/Figma.svg?raw":"chunks/Figma_BMhXnvnp.mjs","E:/workSpace/ali_image/src/assets/images/Gitlab.svg?raw":"chunks/Gitlab_T9trD7jw.mjs","E:/workSpace/ali_image/src/assets/images/Gumroad.svg?raw":"chunks/Gumroad_BQBYfe-V.mjs","E:/workSpace/ali_image/src/assets/images/Linear.svg?raw":"chunks/Linear_B-y85biS.mjs","E:/workSpace/ali_image/src/assets/images/Stripe.svg?raw":"chunks/Stripe_CoVB-_JJ.mjs","E:/workSpace/ali_image/src/assets/images/logo.svg?raw":"chunks/logo_Dgfl9kXu.mjs","E:/workSpace/ali_image/src/assets/images/Canva.svg":"chunks/Canva_cpQdhv5F.mjs","E:/workSpace/ali_image/src/assets/images/Figma.svg":"chunks/Figma_B5iOBqKY.mjs","E:/workSpace/ali_image/src/assets/images/Gitlab.svg":"chunks/Gitlab_jjbBBcPm.mjs","E:/workSpace/ali_image/src/assets/images/Gumroad.svg":"chunks/Gumroad_DBIX_bEq.mjs","E:/workSpace/ali_image/src/assets/images/Linear.svg":"chunks/Linear_CouOgpE7.mjs","E:/workSpace/ali_image/src/assets/images/Stripe.svg":"chunks/Stripe_5gJyRch4.mjs","E:/workSpace/ali_image/src/assets/images/dashboard.png":"chunks/dashboard_mvBZDTlg.mjs","E:/workSpace/ali_image/src/assets/images/logo.svg":"chunks/logo_Zm7fg_XC.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.Iww7Nv4Z.png","/_astro/Figma.BoZeEAjk.svg","/_astro/Canva.oL0gQJZS.svg","/_astro/Gitlab.BwdUOWx8.svg","/_astro/Stripe.BKDtiSro.svg","/_astro/Gumroad.B-F__WK2.svg","/_astro/Linear.3Xqb4gnU.svg","/_astro/logo.CXTHLdKC.svg","/_astro/faq.BoqqColD.css","/logo.svg","/og-image.png","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/chunks/astro-designed-error-pages_DKnNj3is.mjs","/_worker.js/chunks/astro_CJVy9JgM.mjs","/_worker.js/chunks/BaseLayout_DxwxkEnP.mjs","/_worker.js/chunks/Canva_BPq_-xyc.mjs","/_worker.js/chunks/Canva_cpQdhv5F.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/dashboard_mvBZDTlg.mjs","/_worker.js/chunks/Figma_B5iOBqKY.mjs","/_worker.js/chunks/Figma_BMhXnvnp.mjs","/_worker.js/chunks/Gitlab_jjbBBcPm.mjs","/_worker.js/chunks/Gitlab_T9trD7jw.mjs","/_worker.js/chunks/Gumroad_BQBYfe-V.mjs","/_worker.js/chunks/Gumroad_DBIX_bEq.mjs","/_worker.js/chunks/index_BgDHZZI_.mjs","/_worker.js/chunks/Linear_B-y85biS.mjs","/_worker.js/chunks/Linear_CouOgpE7.mjs","/_worker.js/chunks/logo_Dgfl9kXu.mjs","/_worker.js/chunks/logo_Zm7fg_XC.mjs","/_worker.js/chunks/noop-middleware_BIKjDzca.mjs","/_worker.js/chunks/path_h5kZAkfu.mjs","/_worker.js/chunks/runtime_CqRBG-6e.mjs","/_worker.js/chunks/sharp_MzFFi1g5.mjs","/_worker.js/chunks/Stripe_5gJyRch4.mjs","/_worker.js/chunks/Stripe_CoVB-_JJ.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Dq6SO9Mo.mjs","/_worker.js/chunks/_astro_assets_Dvbu5Y3m.mjs","/_worker.js/pages/faq.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/login.astro.mjs","/_worker.js/pages/privacy.astro.mjs","/_worker.js/pages/signup.astro.mjs","/_worker.js/pages/terms.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/Canva.oL0gQJZS.svg","/_worker.js/_astro/dashboard.Iww7Nv4Z.png","/_worker.js/_astro/faq.BoqqColD.css","/_worker.js/_astro/Figma.BoZeEAjk.svg","/_worker.js/_astro/Gitlab.BwdUOWx8.svg","/_worker.js/_astro/Gumroad.B-F__WK2.svg","/_worker.js/_astro/Linear.3Xqb4gnU.svg","/_worker.js/_astro/logo.CXTHLdKC.svg","/_worker.js/_astro/Stripe.BKDtiSro.svg","/_worker.js/chunks/astro/server_BXD0-EmR.mjs","/_worker.js/pages/api/_---hono_.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ye6sjMbaFWqLPnRNZMzbdu3zE7GrOzU7w/qX1wYgSSo=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
