import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Contact Sales</h1>
    <section class="mkt-card max-w-2xl">
      <p class="text-slate-600 dark:text-slate-400">
        Tell us your target rollout date, number of applications, and compliance requirements.
      </p>
      <p class="mt-6 font-medium text-slate-900 dark:text-white">
        Email:
        <a href="mailto:sales@auto-no-mous.ai" class="text-teal-600 hover:underline dark:text-teal-400"
          >sales@auto-no-mous.ai</a
        >
      </p>
    </section>
  `,
})
export class ContactSalesPageComponent {}
