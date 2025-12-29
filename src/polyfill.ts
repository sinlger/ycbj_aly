// Polyfill MessageChannel and MessagePort for React 19 SSR in Cloudflare
// This is required because React 19 (and some 18 versions) relies on MessageChannel for scheduling.
// Cloudflare Workers usually have this, but just in case.
// We avoid importing from 'node:worker_threads' because it causes "No such module" errors in Cloudflare Workers.

if (typeof globalThis.MessageChannel === 'undefined') {
  console.log('Polyfilling MessageChannel');

  class MockMessagePort {
    onmessage: ((event: any) => void) | null = null;
    otherPort: MockMessagePort | null = null;
    
    postMessage(data: any) {
      if (this.otherPort && this.otherPort.onmessage) {
        // Schedule microtask to simulate async behavior, which is what React expects
        queueMicrotask(() => {
           this.otherPort?.onmessage?.({ data });
        });
      }
    }
    
    start() {}
    close() {}
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent() { return true; }
  }

  class MockMessageChannel {
    port1: MockMessagePort;
    port2: MockMessagePort;

    constructor() {
      this.port1 = new MockMessagePort();
      this.port2 = new MockMessagePort();
      this.port1.otherPort = this.port2;
      this.port2.otherPort = this.port1;
    }
  }

  // @ts-ignore
  globalThis.MessageChannel = MockMessageChannel;
  // @ts-ignore
  globalThis.MessagePort = MockMessagePort;
}
