globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML, F as Fragment, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_BXD0-EmR.mjs';
/* empty css                       */
import { $ as $$Image } from './_astro_assets_Dvbu5Y3m.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://yoursite.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Basic Meta Tags --><title>Astro SaaS & Startup Template</title><meta name="description" content="Astro SaaS template built with Astro & Tailwind CSS. Customize freely and deploy with ease."><meta name="keywords" content="keyword1, keyword2, keyword3"><meta name="author" content="Your Name or Company Name"><!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><!-- Favicon for IE --><link rel="shortcut icon" href="/logo.svg" type="image/x-icon"><!-- Open Graph / Facebook --><meta property="og:image" content="/og-image.png"><meta property="og:type" content="website"><meta property="og:url" content="https://www.yourwebsite.com/"><meta property="og:title" content="Your Website Title"><meta property="og:description" content="A brief description of your website content."><meta property="og:image" content="https://www.yourwebsite.com/path/to/image.jpg"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://www.yourwebsite.com/"><meta property="twitter:title" content="Your Website Title"><meta property="twitter:description" content="A brief description of your website content."><meta property="twitter:image" content="https://www.yourwebsite.com/path/to/image.jpg"><!-- Canonical URL --><link rel="canonical" href="https://www.yourwebsite.com/"><!-- Additional SEO --><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><!-- Apple Touch Icon (already included in favicons, but keeping for backwards compatibility) --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><!-- Theme Color for Mobile Browsers --><meta name="theme-color" content="#ffffff"><!---- Alpine  --><script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js">\n<\/script>'])));
}, "E:/workSpace/ali_image/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://yoursite.com");
const $$OptimizedImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OptimizedImage;
  const {
    src,
    alt = "",
    inlineSvg = false,
    width,
    height,
    loading = "lazy",
    decoding = "async",
    formats,
    style,
    ...rest
  } = Astro2.props;
  if (!src) {
    throw new Error("Image component requires a 'src' prop");
  }
  if (!inlineSvg && !alt) {
    throw new Error("Image component requires an 'alt' prop for accessibility");
  }
  const isLocalImage = !src.startsWith("http") && !src.startsWith("data:") && !src.startsWith("blob:");
  let imageContent;
  let imageModule;
  if (isLocalImage) {
    const normalizedSrc = src.startsWith("/src/assets") ? src : `/src/assets/images${src.startsWith("/") ? src : "/" + src}`;
    try {
      if (inlineSvg && normalizedSrc.endsWith(".svg")) {
        const rawSvgs = /* #__PURE__ */ Object.assign({"/src/assets/images/Canva.svg": () => import('./Canva_BPq_-xyc.mjs').then(m => m["default"]),"/src/assets/images/Figma.svg": () => import('./Figma_BMhXnvnp.mjs').then(m => m["default"]),"/src/assets/images/Gitlab.svg": () => import('./Gitlab_T9trD7jw.mjs').then(m => m["default"]),"/src/assets/images/Gumroad.svg": () => import('./Gumroad_BQBYfe-V.mjs').then(m => m["default"]),"/src/assets/images/Linear.svg": () => import('./Linear_B-y85biS.mjs').then(m => m["default"]),"/src/assets/images/Stripe.svg": () => import('./Stripe_CoVB-_JJ.mjs').then(m => m["default"]),"/src/assets/images/logo.svg": () => import('./logo_Dgfl9kXu.mjs').then(m => m["default"])


});
        if (rawSvgs[normalizedSrc]) {
          const svgContent = await rawSvgs[normalizedSrc]();
          const attributes = Object.entries(rest).filter(([key]) => key !== "class").map(([key, value]) => `${key}="${value}"`).join(" ");
          const classAttr = rest.class || Astro2.props.class;
          const widthAttr = width ? `width="${width}"` : "";
          const heightAttr = height ? `height="${height}"` : "";
          const styleAttr = style ? `style="${typeof style === "object" ? Object.entries(style).map(([k, v]) => `${k}:${v}`).join(";") : style}"` : "";
          imageContent = svgContent.replace(
            "<svg",
            `<svg data-icon="true" ${classAttr ? `class="${classAttr}"` : ""} ${widthAttr} ${heightAttr} ${styleAttr} ${attributes}`
          );
        } else {
          console.warn(`SVG not found: ${normalizedSrc}`);
        }
      } else {
        const images = /* #__PURE__ */ Object.assign({"/src/assets/images/Canva.svg": () => import('./Canva_cpQdhv5F.mjs'),"/src/assets/images/Figma.svg": () => import('./Figma_B5iOBqKY.mjs'),"/src/assets/images/Gitlab.svg": () => import('./Gitlab_jjbBBcPm.mjs'),"/src/assets/images/Gumroad.svg": () => import('./Gumroad_DBIX_bEq.mjs'),"/src/assets/images/Linear.svg": () => import('./Linear_CouOgpE7.mjs'),"/src/assets/images/Stripe.svg": () => import('./Stripe_5gJyRch4.mjs'),"/src/assets/images/dashboard.png": () => import('./dashboard_mvBZDTlg.mjs'),"/src/assets/images/logo.svg": () => import('./logo_Zm7fg_XC.mjs')

});
        if (images[normalizedSrc]) {
          imageModule = images[normalizedSrc]();
        } else {
          console.warn(
            `Image not found: ${normalizedSrc}. Available images:`,
            Object.keys(images)
          );
        }
      }
    } catch (error) {
      console.error(`Error loading image: ${normalizedSrc}`, error);
    }
  }
  return renderTemplate`${isLocalImage ? inlineSvg && imageContent ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(imageContent)}` })}` : imageModule ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageModule, "alt": alt, "width": width, "height": height, "loading": loading, "decoding": decoding, "formats": formats, "style": style, "class": rest.class || Astro2.props.class, ...rest })}` : renderTemplate`${maybeRenderHead()}<div class="image-error" style="color: red; border: 1px solid red; padding: 1rem;">
Image not found: ${src}</div>` : (
    /* External images */
    renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "inferSize": true, "loading": loading, "decoding": decoding, "style": style, "class": rest.class || Astro2.props.class, ...rest })}`
  )}`;
}, "E:/workSpace/ali_image/src/layouts/utilities/OptimizedImage.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-black/5 sticky top-0 z-50 bg-white/40 backdrop-blur-2xl"> <div class="w-full mx-auto px-8 max-w-7xl lg:px-16"> <div x-data="{ open: false }" class="relative flex flex-col w-full py-5 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-6"> <div class="flex flex-row items-center justify-between lg:justify-start"> <a href="/" class="text-black inline-flex items-center gap-3"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "width": 40, "src": "/logo.svg", "alt": "logo" })} <span class="font-bold">Syntro</span> </a> <button @click="open = !open" :aria-expanded="open.toString()" aria-controls="main-navigation" aria-label="Toggle navigation menu" class="inline-flex items-center justify-center p-2 text-base-400 hover:text-black focus:outline-none focus:text-black lg:hidden"> <svg :class="{'rotate-90': open}" class="w-6 h-6 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path x-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path x-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav :class="{'h-auto': open, 'h-0': !open}" id="main-navigation" class="flex-col items-center flex-grow gap-4 lg:gap-8 flex overflow-hidden lg:pb-0 lg:flex lg:justify-end lg:h-auto lg:flex-row"> <a class="text-sm text-black transition duration-300 hover:text-blue-600 lg:ml-auto" href="/#features">
Features
</a> <a href="/" class="text-sm text-black transition duration-300 hover:text-blue-600 relative">
Updates
<span class="bg-red-600 ms-1 text-white text-[10px] px-2 py-1 rounded-full">
NEW
</span> </a> <a href="/" class="text-sm text-black transition duration-300 hover:text-blue-600 relative">
Changelog
<sup class="ml-1 inline-block mt-1 w-1.5 h-1.5 bg-green-500 rounded-full"></sup> </a> <a href="/faq" class="text-sm text-black transition duration-300 hover:text-blue-600 relative">
Faq
</a> <div class="inline-flex items-center gap-2 list-none py-px lg:ml-auto"> <a href="/signup" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-600 ring-1 ring-base-200 focus:bg-accent-100 h-8 px-4 py-2 text-xs font-medium rounded-md hover:bg-accent-100">
Sign up
</a> <a href="/login" class="flex items-center justify-center transition-all duration-200 ring-1 focus:ring-2 ring-accent-700 focus:outline-none text-base-50 bg-accent-600 hover:bg-accent-700 focus:ring-base-500/50 h-8 px-4 py-2 text-xs font-medium rounded-md">
Log in
</a> </div> </nav> </div> </div> </header>`;
}, "E:/workSpace/ali_image/src/components/global/Navigation.astro", void 0);

const $$Astro = createAstro("https://yoursite.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const sections = [
    {
      title: "All pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Partners", href: "/partners" },
        { name: "Terms", href: "/terms" },
        { name: "Privacy", href: "/privacy" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Status", href: "/status" },
        { name: "Github", href: "https://github.com/bekturaslan/syntro-astro" },
        { name: "Changelog", href: "/changelog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Contact Support", href: "/support" },
        { name: "Live Chat", href: "/chat" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-base-200 mt-20"> <div class="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"> <div class="md:col-span-1"> <a href="/" class="inline-flex items-center gap-3"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "width": 40, "src": "/logo.svg", "alt": "logo" })} <span class="text-lg font-semibold text-black">Syntro</span> </a> <p class="mt-4 text-sm text-gray-500">
Open-source SaaS starter built with Astro & Tailwind CSS. Customize
          freely and deploy with ease.
</p> </div> <div class="md:col-span-2"> <h3 class="text-lg font-semibold text-black mb-2">
Subscribe to our newsletter
</h3> <p class="text-sm text-gray-500 mb-4">
Join 1,000+ developers and get product updates, tips, and insights in
          your inbox.
</p> <form class="flex flex-col sm:flex-row items-center gap-3 w-full"> <input type="email" placeholder="Your email address" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"> <button type="submit" class="px-6 py-2 w-full md:w-auto rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
Subscribe
</button> </form> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600"> ${sections.map(({ title, links }) => renderTemplate`<div> <h4 class="text-base font-semibold text-black mb-5">${title}</h4> <ul> ${links.map(({ name, href }) => renderTemplate`<li class="first:prose-a:pt-0 last:prose-a:pb-0"> <a${addAttribute(href, "href")} class="hover:text-blue-600 py-2 inline-block transition"> ${name} </a> </li>`)} </ul> </div>`)} </div> <div class="pt-12 mt-12 border-t border-base-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Your Company Name. Crafted by Michael Andreuzza
        &
<a href="https://getastrothemes.com/free-astro-themes-templates/" class="underline text-blue-600 hover:text-blue-800">
Getastrothemes
</a> </p> <p>Additionally Development by Bektur Aslan</p> </div> </div> </footer>`;
}, "E:/workSpace/ali_image/src/components/global/Footer.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-accent-500 selection:text-white no-touchevents hydrated"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}<!-- <Font cssVariable="--font-sans" preload /> -->${renderHead()}</head> <body class="bg-white flex flex-col min-h-svh"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main class="grow">${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/workSpace/ali_image/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$OptimizedImage as a };
