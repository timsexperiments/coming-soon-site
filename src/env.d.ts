/// <reference types="astro/client" />

type AdvancedRuntime = import('@astrojs/cloudflare').AdvancedRuntime;
type KVNamespace = import('@cloudflare/workers-types').KVNamespace;
type ServiceWorkerGlobalScope =
  import('@cloudflare/workers-types').ServiceWorkerGlobalScope;

declare namespace App {
  interface Locals extends AdvancedRuntime {
    runtime: AdvancedRuntime & {
      env: {
        NEWS_LETTER_KV: KVNamespace;
        EMAILER_SERVICE: ServiceWorkerGlobalScope;
        API_KEY: string;
      };
    };
  }
}
