import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Pricing</h1>
    <div class="mkt-grid">
      <section class="mkt-card border-teal-200/50 dark:border-teal-900/50">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Starter</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">For pilot programs and internal tools.</p>
      </section>
      <section class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Growth</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">For multi-team deployments with custom model routing.</p>
      </section>
      <section class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Enterprise</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          For advanced governance, SSO, and private networking.
        </p>
      </section>
    </div>
  `,
})
export class PricingPageComponent {}
