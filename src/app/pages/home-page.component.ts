import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section
      class="mkt-card relative overflow-hidden border-0 bg-gradient-to-br from-white via-blue-50/50 to-teal-50/40 p-8 shadow-lg dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div
        class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/10"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/10"
      ></div>
      <h1 class="relative max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        Enterprise AI Copilot for Any Web App
      </h1>
      <p class="relative mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        Embed a secure assistant into Angular, React, or vanilla applications with retrieval, streaming, and governance
        controls.
      </p>
      <div class="relative mt-8 flex flex-wrap gap-3">
        <a
          routerLink="/get-started"
          class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-sm font-bold text-white no-underline shadow-lg shadow-teal-500/25 transition hover:brightness-110"
          >Start Free Trial</a
        >
        <a
          routerLink="/product"
          class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 no-underline backdrop-blur transition hover:bg-white dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-800"
          >See Product Tour</a
        >
      </div>
    </section>

    <section class="mkt-grid mt-10">
      <article class="mkt-card">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">Fast Embed</h2>
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Script tag and npm package options for all major frontend stacks.
        </p>
      </article>
      <article class="mkt-card">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">Enterprise Guardrails</h2>
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Tenant isolation, model controls, and action approvals for agent workflows.
        </p>
      </article>
      <article class="mkt-card">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">RAG + Multi-Agent</h2>
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Ingest docs and codebase context to answer accurately in ASK, TEST, and AGENT modes.
        </p>
      </article>
    </section>
  `,
})
export class HomePageComponent {}
