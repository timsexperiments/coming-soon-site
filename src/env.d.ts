/// <reference types="astro/client" />

type AdvancedRuntime = import('@astrojs/cloudflare').AdvancedRuntime;
type KVNamespace = import('@cloudflare/workers-types').KVNamespace;
type SendEmail = import('@cloudflare/workers-types').SendEmail;

declare namespace App {
  interface Locals extends AdvancedRuntime {
    runtime: AdvancedRuntime & {
      env: { NEWS_LETTER_KV: KVNamespace; NO_REPLY_EMAIL: SendEmail };
    };
  }
}
