import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Product</h1>
    <div class="mkt-grid">
      <section class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">How Embed Works</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          Choose script embed or npm package, add app ID and environment, and ship.
        </p>
        <pre
          class="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-sm text-teal-300 dark:border-slate-700"
        ><code>&lt;script src="https://cdn.yourcopilot.ai/v1/loader.js" data-app-id="app_123"&gt;&lt;/script&gt;</code></pre>
      </section>
      <section class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Chat Widget UX</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          Floating button opens a resizable side drawer with streaming markdown and citations.
        </p>
      </section>
    </div>
  `,
})
export class ProductPageComponent {}
