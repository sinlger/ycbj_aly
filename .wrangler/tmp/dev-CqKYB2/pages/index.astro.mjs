globalThis.process ??= {}; globalThis.process.env ??= {};
import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_BXD0-EmR.mjs';
import { a as $$OptimizedImage, $ as $$BaseLayout } from '../chunks/BaseLayout_DxwxkEnP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://yoursite.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const featuresList = [
    {
      title: "Astro, Tailwind CSS and Alpine.js",
      description: "These are the popular technologies behind Syntro."
    },
    {
      title: "Includes 6 pages",
      description: "You will find this landing, FAQ, terms, privacy, sign up, and sign in pages."
    },
    {
      title: "Different sections",
      description: "The starter includes different feature sections, a pricing table, testimonial, CTA, and full forms."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="overflow-hidden"> <div class="px-8 pt-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative"> <div class="max-w-2xl text-center mx-auto lg:text-balance mb-10"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Tagline
</p> <h2 class="text-xl/snug leading-tight tracking-tight sm:text-2xl/snug md:text-3xl/snug capitalize lg:text-4xl/snug mt-4 font-medium text-base-900">
An astro template built with Astro and Tailwind CSS for your next
        project
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
The fastest method for working together on staging and temporary
        environments.
</p> <div class="flex flex-wrap items-center gap-2 justify-center mx-auto mt-12"> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:bg-accent-100 ring-1 ring-base-200 focus:ring-accent-100 hover:text-accent-600 h-9 px-4 py-2 text-sm font-medium rounded-md">
Get This Template
</a> <a href="https://getastrothemes.com/free-astro-themes-templates/" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-700/50 h-9 px-4 py-2 text-sm font-medium rounded-md">
More Free Astro themes
</a> </div> </div> <div class="lg:gap-x-8 lg:grid-cols-3 max-w-4xl mt-8 mx-auto sm:gap-x-6 sm:gap-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 space-y-6 text-center text-sm items-start"> ${featuresList.map(({ title, description }) => renderTemplate`<div class="text-base-500 lg:text-balance"> <strong class="text-base-700">${title}</strong> ━ ${description} </div>`)} </div> <div class="relative w-full mx-auto max-w-7xl items-center py-12 pb-12"> <div class="p-10 bg-accent-50 rounded-2xl"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": "/dashboard.png", "alt": "#_", "width": 1200, "height": 700, "class": "relative w-full ring-4 ring-base-50 border border-base-200 lg:rounded-2xl object-cover rounded" })} </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/Hero.astro", void 0);

const $$SectionOne = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features"> <div class="px-8 py-20 mx-auto md:px-12 lg:px-24 max-w-7xl"> <div class="text-center max-w-2xl mx-auto lg:text-balance"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Tagline
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
Transforming the banking experience for a digital future
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
The fastest method for working together on staging and temporary
        environments.
</p> </div> <div class="relative py-12 mx-auto overflow-hidden overflow-x-hidden 2xl:max-w-screen-xl"> <div class="grid justify-between w-full"> <div class="absolute inset-0 left-0 z-10 from-white via-transparent w-44 bg-gradient-to-r"></div> <div class="absolute inset-0 left-0 z-10 ml-auto from-white via-transparent w-44 bg-gradient-to-l"></div> </div> <div class="relative flex items-center gap-2 whitespace-nowrap t"> <span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Secure Transactions
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Proxy Voting Capabilities
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Swift and Effortless Account Setup
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Merging Identical Entries
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Customized Domain Options
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Allow Guest Financial Insights
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Advanced Textual Analysis Tools
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Tailored Brand Color Schemes
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Define Financial Profile Images
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Choose Between Dark and Light Finance Views
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Priority Account Alerts
</span><span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg">
Internal Financial Discussions
</span> </div> </div> <div class="grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-y-16"> <div> <div class="flex flex-col gap-3 text-accent-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-widivh="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-filter size-5 mx-auto"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path> <path d="M8 11a5 5 0 1 0 3.998 1.997"></path> <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003"></path> </svg> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Live editing
</h3> </div> </div> <div> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Instantly see the result of every change you make.
</p> </div> </div> <div> <div class="flex flex-col gap-3 text-accent-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-widivh="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-wave-square size-5 mx-auto"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12h5v8h4v-16h4v8h5"></path> </svg> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Autocompletion
</h3> </div> </div> <div> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Spotless will suggest the right classes for you as you type.
</p> </div> </div> <div> <div class="flex flex-col gap-3 text-accent-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-widivh="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-iteration size-5 mx-auto"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5"></path> <path d="M3 16h18"></path> <path d="M18 13l3 3l-3 3"></path> </svg> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Hide/show classes
</h3> </div> </div> <div> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Hide or show classes to see how your design changes.
</p> </div> </div> <div> <div class="flex flex-col gap-3 text-accent-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-widivh="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus size-5 mx-auto"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path> </svg> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Color preview
</h3> </div> </div> <div> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
See the color of every class in the autocompletion view.
</p> </div> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/SectionOne.astro", void 0);

const $$SectionTwo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"> <div class="lg:order-last"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Tagline
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900">
Transforming the banking experience for a digital future
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
The fastest method for working together on staging and temporary
          environments.
</p> <div class="flex flex-wrap items-center gap-2 mx-auto mt-12"> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-9 px-4 py-2 text-sm font-medium rounded-md">
Get started
</a> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md">
Learn more details
</a> </div> </div> <div class="lg:col-span-2"> <div class="p-5 bg-accent-50 rounded-2xl"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": "/dashboard.png", "alt": "#_", "width": 900, "height": 500, "loading": "eager", "fetchpriority": "high", "class": "relative w-full ring-4 ring-base-50 border border-base-200 lg:rounded-2xl object-cover rounded" })} </div> </div> </div> <div class="gap-x-2 gap-y-14 mt-12 lg:gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> <div> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Innovative Design
</h3> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Our cutting-edge design offers a fresh, modern look that transforms
            your project into a standout experience.
</p> </div> <ul role="list" class="space-y-1 mt-6 text-base font-medium text-base-900"> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Revolutionizing communication
</span> </div> </li> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Enhancing productivity
</span> </div> </li> </ul> </div> <div> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Powerful Functionality
</h3> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Equipped with advanced features and tools, our solution effortlessly
            manages complex tasks and workflows.
</p> </div> <ul role="list" class="space-y-1 mt-6 text-base font-medium text-base-900"> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Unlocking innovative solutions
</span> </div> </li> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Enabling interoperability
</span> </div> </li> </ul> </div> <div> <div> <h3 class="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
Easy Integration
</h3> <p class="text-base leading-normal mt-2 text-base-500 font-medium">
Integrating with existing systems is smooth and hassle-free, thanks
            to our incredible flexible approach.
</p> </div> <ul role="list" class="space-y-1 mt-6 text-base font-medium text-base-900"> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Streamlining operations
</span> </div> </li> <li> <div class="flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600" slot="icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path> </svg> <span class="text-base leading-normal">
Simplifying implementation
</span> </div> </li> </ul> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/SectionTwo.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-20" x-data="{duration: 'monthly'}"> <div class="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8"> <div class="max-w-xl text-center mx-auto"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Tagline
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
Equip your business
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium lg:text-balance">
Choose a plan that works the best for you and your team.
</p> <div aria-labelledby="pricing-toggle" class="w-full relative mt-8 ring-1 ring-base-200 ring-offset-2 bg-white overflow-hidden justify-center gap-4 mx-auto lg:mx-0 inline-flex p-1 rounded-md max-w-52 shadow z-0"> <!-- Monthly Pricing Button: Sets 'duration' to 'monthly' when clicked --> <!-- Sliding background --> <div class="absolute inset-0 bg-base-50 rounded-md transition-transform duration-200 ease-in-out" :class="duration === 'monthly' ? 'w-1/2 translate-x-0' : 'w-1/2 translate-x-full'"></div> <!-- Monthly Pricing Button --> <button id="monthly-pricing-button" class="relative flex items-center justify-center w-full px-2 h-6 text-xs font-medium focus:outline-none transition-colors duration-300 z-10" :class="duration === 'monthly' ? 'text-accent-600' : 'text-base-500 hover:text-accent-500'" @click="duration = 'monthly'" type="button" :aria-pressed="duration === 'monthly'">
Monthly
</button> <!-- Annual Pricing Button --> <button id="annual-pricing-button" class="relative flex items-center justify-center w-full px-2 h-6 text-xs font-medium focus:outline-none transition-colors duration-300 z-10" :class="duration === 'annual' ? 'text-accent-600' : 'text-base-500 hover:text-accent-500'" @click="duration = 'annual'" type="button" :aria-pressed="duration === 'annual'">
Annual
</button> </div> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12 mx-auto"> <!-- Tier one --> <div class="flex flex-col h-full p-1 lg:py-1 rounded-3xl bg-base-50 ring-4 ring-base-50 border border-base-200"> <div> <div class="flex flex-col gap-4 p-8 bg-white rounded-[1.3rem] h-full"> <div class="flex items-start justify-between w-full"> <div> <h3 class="text-lg leading-normal sm:text-xl md:text-2xl font-medium text-base-900">
Core
</h3> <p class="text-base leading-normal font-medium text-base-500">
For individuals
</p> </div> </div> <p class="text-base leading-normal font-medium text-base-500">
This subscription tier caters to individuals and hobbyists seeking
              features.
</p> </div> </div> <div class="p-8"> <p class="font-semibold flex lg:text-3xl items-baseline text-2xl tracking-tighter text-base-900"> <span data-monthly="$29.00" data-annual="$19.00" x-text="$el.dataset[duration]"></span> <span class="text-sm font-normal font-sans tracking-normal text-base-500"> <span x-show="duration === 'monthly'">/month</span> <span x-show="duration === 'annual'" style="display: none">
/annually
</span> </span> </p> <div class="w-full mt-4"> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md w-full">
Get Started
</a> </div> <div class="mt-8"> <p class="text-sm leading-normal font-medium uppercase text-base-500">
Core plan includes:
</p> <ul class="flex flex-col mt-4 gap-y-3 text-base-500" role="list"> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Unlimited members</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">1 Team</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">50 issues</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Slack, GitHub, and API access
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Basic reporting tools
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Community support</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Basic customization options
</span> </li> </ul> </div> </div> </div> <!-- Tier two --> <div class="flex flex-col h-full p-1 lg:py-1 rounded-3xl bg-base-950 ring-4 ring-base-50 border border-base-200"> <div> <div class="flex flex-col gap-4 p-8 bg-white/10 rounded-[1.3rem] h-full"> <div class="flex items-start justify-between w-full"> <div> <h3 class="text-lg leading-normal sm:text-xl md:text-2xl font-medium text-white">
Momentum
</h3> <p class="text-base leading-normal font-medium text-base-100">
For startups
</p> </div> <span class="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-2.5 py-1 text-xs rounded-md">
Popular
</span> </div> <p class="text-base leading-normal font-medium text-base-100">
Tailored for expanding businesses, this tier offers advanced tools
              and analytics.
</p> </div> </div> <div class="p-8"> <p class="font-semibold flex lg:text-3xl items-baseline text-2xl tracking-tighter text-white"> <span data-monthly="$49.00" data-annual="$39.00" x-text="$el.dataset[duration]"></span> <span class="text-sm font-normal font-sans tracking-normal text-white/50"> <span x-show="duration === 'monthly'">/month</span> <span x-show="duration === 'annual'" style="display: none">
/annually
</span> </span> </p> <div class="w-full mt-4"> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md w-full">
Get Started
</a> </div> <div class="mt-8"> <p class="text-sm leading-normal font-medium uppercase text-base-100">
Momentum plan includes:
</p> <ul class="flex flex-col mt-4 gap-y-3 text-base-100" role="list"> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Unlimited teams</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Private teams and guests
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Insights</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Custom branding options
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Collaboration tools
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Mobile app access</span> </li> </ul> </div> </div> </div> <!-- Tier three --> <div class="flex flex-col h-full p-1 lg:py-1 rounded-3xl bg-accent-700 ring-4 ring-base-50 border border-base-200"> <div> <div class="flex flex-col gap-4 p-8 bg-white/10 rounded-[1.3rem] h-full"> <div class="flex items-start justify-between w-full"> <div> <h3 class="text-lg leading-normal sm:text-xl md:text-2xl font-medium text-white">
Growth
</h3> <p class="text-base leading-normal font-medium text-base-100">
For corporates
</p> </div> </div> <p class="text-base leading-normal font-medium text-base-100">
Designed for established businesses, providing comprehensive
              tools.
</p> </div> </div> <div class="p-8"> <p class="font-semibold flex lg:text-3xl items-baseline text-2xl tracking-tighter text-white"> <span data-monthly="$99.00" data-annual="$79.00" x-text="$el.dataset[duration]"></span> <span class="text-sm font-normal font-sans tracking-normal text-accent-100"> <span x-show="duration === 'monthly'">/month</span> <span x-show="duration === 'annual'" style="display: none">
/annually
</span> </span> </p> <div class="w-full mt-4"> <a href="https://github.com/bekturaslan/syntro-astro" class="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md w-full">
Get Started
</a> </div> <div class="mt-8"> <p class="text-sm leading-normal font-medium uppercase text-base-100">
Growth plan includes:
</p> <ul class="flex flex-col mt-4 gap-y-3 text-base-100" role="list"> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Unlimited members</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Advanced analytics</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Priority support</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">
Custom API integration
</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Unlimited storage</span> </li> <li class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l5 5l10 -10"></path> </svg> <span class="text-base leading-normal">Enhanced security</span> </li> </ul> </div> </div> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/Pricing.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-600 py-20 text-white"> <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-24"> <div class="text-center mb-14"> <p class="text-sm leading-normal font-bold uppercase text-white">
Tagline
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-white">
Features Built to Accelerate Growth
</h2> <p class="mt-4 text-lg text-white max-w-xl mx-auto">
Everything you need to launch your SaaS business.
</p> </div> <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"> <div class="bg-white/90 text-gray-800 p-8 rounded-2xl hover:scale-[1.025] transition ease-linear"> <div class="mb-4 text-accent-700"> <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class=""> <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1z" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Cloud Native</h3> <p class="text-base font-medium">
Scale globally with reliable, serverless cloud architecture.
</p> </div> <div class="bg-white/90 text-gray-800 p-8 rounded-2xl hover:scale-[1.025] transition ease-linear"> <div class="mb-4 text-accent-700"> <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class=""> <path d="M11 17a4 4 0 100-8 4 4 0 000 8zm0-10V4m0 14v-3m7-7h-3m3 0h3m-14 0H4m3 0H4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Analytics Ready</h3> <p class="text-base font-medium">
Get actionable insights with built-in data and engagement tracking.
</p> </div> <div class="bg-white/90 text-gray-800 p-8 rounded-2xl hover:scale-[1.025] transition ease-linear"> <div class="mb-4 text-accent-700"> <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class=""> <path d="M12 4v1m0 14v1m8-9h-1M5 12H4m15.36 6.36l-.707-.707M6.343 6.343l-.707-.707M18.364 6.343l-.707.707M6.343 17.657l-.707.707" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Built-in Security</h3> <p class="text-base font-medium">
Enterprise-grade protection and user privacy by default.
</p> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/WhyChooseUs.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white pt-20 text-base-900"> <div class="max-w-7xl mx-auto px-8 md:px-12 lg:px-24"> <div class="text-center mb-16"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Tagline
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
How It Works
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
A simple, three-step journey to get your SaaS up and running quickly.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-5 lg:gap-10 max-lg:divide-y lg:divide-x divide-blue-400 divide-dashed"> <div class="relative z-10 bg-white text-center md:text-left pt-6 md:pe-10 lg:py-0 pb-10 last:pb-0 last:pe-0"> <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto md:mx-0 mb-4">
1
</div> <h3 class="text-xl font-semibold mb-2">Create Your Account</h3> <p class="text-base text-base-600">
Sign up with your email and choose a plan that fits your team.
</p> </div> <div class="relative z-10 bg-white text-center md:text-left pt-6 md:pe-10 lg:py-0 pb-10 last:pb-0 last:pe-0"> <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto md:mx-0 mb-4">
2
</div> <h3 class="text-xl font-semibold mb-2">Set Up Your Workflow</h3> <p class="text-base text-base-600">
Connect your favorite tools, configure automations, and customize.
</p> </div> <div class="relative z-10 bg-white text-center md:text-left pt-6 md:pe-10 lg:py-0 pb-10 last:pb-0 last:pe-0"> <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto md:mx-0 mb-4">
3
</div> <h3 class="text-xl font-semibold mb-2">Launch & Optimize</h3> <p class="text-base text-base-600">
Go live, monitor performance, and scale with real-time analytics monitor.
</p> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/landing/HowItWorks.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-20"> <div class="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl"> <div class="text-center max-w-2xl mx-auto lg:text-balance"> <p class="text-sm leading-normal font-bold uppercase text-accent-600">
Testimonials
</p> <h2 class="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
Our Customers Love Us
</h2> <p class="text-base leading-normal mt-4 text-base-500 font-medium">
Hear what SaaS founders and startup teams are saying.
</p> </div> <div class="grid gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3"> <div class="bg-base-50 p-6 rounded-xl shadow-sm"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": "https://randomuser.me/api/portraits/men/1.jpg", "alt": "Customer avatar", "class": "w-12 h-12 rounded-full mb-4" })} <p class="text-base text-base-700 font-medium">
“The onboarding experience was seamless and we saw productivity boost
          within days. Highly recommend!”
</p> <p class="text-sm text-base-500 mt-3 font-semibold">
— Emily Zhang, Product Manager
</p> </div> <div class="bg-base-50 p-6 rounded-xl shadow-sm"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": "https://randomuser.me/api/portraits/men/45.jpg", "alt": "Customer avatar", "class": "w-12 h-12 rounded-full mb-4" })} <p class="text-base text-base-700 font-medium">
“Their customer support is unmatched. The team genuinely cares about
          our success.”
</p> <p class="text-sm text-base-500 mt-3 font-semibold">
— Carlos Rivera, CTO
</p> </div> <div class="bg-base-50 p-6 rounded-xl shadow-sm"> ${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": "https://randomuser.me/api/portraits/men/32.jpg", "alt": "Customer avatar", "class": "w-12 h-12 rounded-full mb-4" })} <p class="text-base text-base-700 font-medium">
“We migrated in less than a week. The platform is fast, secure, and
          reliable.”
</p> <p class="text-sm text-base-500 mt-3 font-semibold">
— Liam O’Brien, Founder
</p> </div> </div> </div> </section>`;
}, "E:/workSpace/ali_image/src/components/global/Testimonial.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "SectionOne", $$SectionOne, {})} ${renderComponent($$result2, "SectionTwo", $$SectionTwo, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ` })}`;
}, "E:/workSpace/ali_image/src/pages/index.astro", void 0);

const $$file = "E:/workSpace/ali_image/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
