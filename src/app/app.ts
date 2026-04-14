import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { ThemeToggleComponent } from './shared/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeToggleComponent],
  template: `
    <div class="mkt-shell">
      <header
        class="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
      >
        <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a
            routerLink="/"
            class="text-lg font-bold tracking-tight text-slate-900 no-underline hover:text-blue-600 dark:text-white dark:hover:text-teal-400"
            >Auto-no-mous AI</a
          >
          <div class="flex flex-wrap items-center gap-2 md:gap-3">
            <nav class="flex flex-wrap items-center gap-1 text-sm font-medium">
              <a
                routerLink="/product"
                routerLinkActive="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                class="rounded-full px-3 py-1.5 text-slate-600 no-underline transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >Product</a
              >
              <a
                routerLink="/security"
                routerLinkActive="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                class="rounded-full px-3 py-1.5 text-slate-600 no-underline transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >Security</a
              >
              <a
                routerLink="/pricing"
                routerLinkActive="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                class="rounded-full px-3 py-1.5 text-slate-600 no-underline transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >Pricing</a
              >
              <a
                routerLink="/docs"
                routerLinkActive="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                class="rounded-full px-3 py-1.5 text-slate-600 no-underline transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >Docs</a
              >
              <a
                routerLink="/contact-sales"
                routerLinkActive="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                class="rounded-full px-3 py-1.5 text-slate-600 no-underline transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >Contact Sales</a
              >
            </nav>
            <app-theme-toggle />
            <a
              routerLink="/get-started"
              class="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 text-sm font-bold text-white no-underline shadow-md shadow-teal-500/20 transition hover:brightness-110"
              >Get Started</a
            >
          </div>
        </div>
      </header>

      <main class="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <router-outlet />
      </main>
    </div>
  `,
})
export class App {
  constructor() {
    inject(ThemeService);
  }
}
