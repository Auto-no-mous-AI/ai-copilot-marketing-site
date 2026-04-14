import { Component, inject } from '@angular/core';
import { ThemePreference, ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <div
      class="inline-flex items-center gap-0.5 rounded-xl border border-slate-200/90 bg-white/90 p-1 shadow-sm dark:border-slate-600 dark:bg-slate-800/90"
      role="group"
      aria-label="Color theme"
    >
      @for (opt of options; track opt.value) {
        <button
          type="button"
          class="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-700"
          [class.bg-slate-100]="theme.preference() === opt.value"
          [class.dark:bg-slate-700]="theme.preference() === opt.value"
          [class.ring-2]="theme.preference() === opt.value"
          [class.ring-teal-500/40]="theme.preference() === opt.value"
          [attr.aria-pressed]="theme.preference() === opt.value"
          [attr.title]="opt.title"
          (click)="set(opt.value)"
        >
          <span class="sr-only">{{ opt.title }}</span>
          @switch (opt.value) {
            @case ('light') {
              <svg class="h-4 w-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            }
            @case ('dark') {
              <svg class="h-4 w-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            }
            @case ('system') {
              <svg class="h-4 w-4 text-slate-500 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
          }
        </button>
      }
    </div>
  `,
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);

  readonly options: { value: ThemePreference; title: string }[] = [
    { value: 'light', title: 'Light theme' },
    { value: 'dark', title: 'Dark theme' },
    { value: 'system', title: 'System theme' },
  ];

  set(value: ThemePreference): void {
    this.theme.setPreference(value);
  }
}
