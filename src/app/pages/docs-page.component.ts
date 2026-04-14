import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Docs</h1>
    <section class="mkt-card max-w-3xl">
      <p class="text-slate-600 dark:text-slate-400">
        Developer docs live in the dedicated <strong class="text-slate-900 dark:text-white">ai-copilot-docs</strong>
        repository.
      </p>
      <ul class="mt-6 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400">
        <li>SDK quickstart</li>
        <li>API reference</li>
        <li>Theming guide</li>
        <li>Security and governance guide</li>
      </ul>
    </section>
  `,
})
export class DocsPageComponent {}
