import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Security</h1>
    <div class="mkt-grid">
      <article class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Data Isolation</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">Per-tenant boundaries and scoped access controls.</p>
      </article>
      <article class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Secret Management</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">KMS/Vault support for model credentials.</p>
      </article>
      <article class="mkt-card">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Auditability</h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">Detailed audit logs and usage events for compliance.</p>
      </article>
    </div>
  `,
})
export class SecurityPageComponent {}
