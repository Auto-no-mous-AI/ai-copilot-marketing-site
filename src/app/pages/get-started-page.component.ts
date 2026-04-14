import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="mb-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Get Started</h1>
    <section class="mkt-card max-w-3xl">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-white">1. Create an App</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-400">Register your application and define allowed host domains.</p>
      <h2 class="mt-8 text-xl font-semibold text-slate-900 dark:text-white">2. Connect Sources</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-400">Attach GitHub or Bitbucket repo plus optional docs/wiki URL.</p>
      <h2 class="mt-8 text-xl font-semibold text-slate-900 dark:text-white">3. Embed Copilot</h2>
      <p class="mt-2 text-slate-600 dark:text-slate-400">Use script or npm package and your generated install token.</p>
    </section>
  `,
})
export class GetStartedPageComponent {}
