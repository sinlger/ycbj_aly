import { defineMiddleware } from "astro:middleware";
import './polyfill';

export const onRequest = defineMiddleware(async (context, next) => {
  return next();
});
