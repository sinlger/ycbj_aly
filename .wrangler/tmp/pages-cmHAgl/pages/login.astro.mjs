globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BXD0-EmR.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DxwxkEnP.mjs';
export { renderers } from '../renderers.mjs';

const $$Login$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative"> <div class="max-w-lg mx-auto"> <div class="text-center lg:text-balance"> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl font-semibold text-base-900 lg:text-balance">
Sign in to your account
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
Welcome back! Please enter your email and password to sign in.
</p> </div> <form action="#" method="POST" class="mx-auto mt-12 max-w-lg"> <div> <label class="text-base leading-normal text-base-500 font-medium">
Email
</label> <div class="mt-2.5"> <input type="email" name="email" id="email" autocomplete="email" required aria-required="true" aria-describedby="email-error" placeholder="Your email" class="block w-full h-10 px-4 py-2 text-sm text-accent-700 duration-300 bg-white border border-transparent rounded-lg appearance-none ring-1 ring-base-200 placeholder-base-400 focus:border-base-300 focus:bg-transparent focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2 sm:text-sm"> <span id="email-error" class="text-red-600 text-sm hidden">
Please enter a valid email address.
</span> </div> </div> <div class="mt-10"> <button class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-10 px-6 py-3 text-base font-medium rounded-lg w-full">
Sign in
</button> </div> <div class="flex items-center mt-4"> <p class="text-sm leading-normal text-base-500 font-medium">
Don't have an account?
<a class="text-base leading-normal text-accent-500 font-medium hover:text-base-500" href="#_">
Sign up
</a> </p> </div> </form> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/Forms/Login.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login", $$Login$1, {})} ` })}`;
}, "E:/workSpace/ali_image/src/pages/login.astro", void 0);

const $$file = "E:/workSpace/ali_image/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
