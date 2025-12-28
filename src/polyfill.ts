import { MessageChannel, MessagePort } from 'node:worker_threads';

// Polyfill MessageChannel and MessagePort for React 19 SSR in Cloudflare
// This is required because React 19 (and some 18 versions) relies on MessageChannel for scheduling,
// and it might be missing in the global scope of the Cloudflare Worker environment
// even with nodejs_compat enabled in some cases.

if (typeof globalThis.MessageChannel === 'undefined') {
  console.log('Polyfilling MessageChannel');
  // @ts-ignore
  globalThis.MessageChannel = MessageChannel;
}

if (typeof globalThis.MessagePort === 'undefined') {
    console.log('Polyfilling MessagePort');
  // @ts-ignore
  globalThis.MessagePort = MessagePort;
}
