import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'ai-copilot-ui-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly preference = signal<ThemePreference>(this.readStored());

  constructor() {
    effect(() => {
      const pref = this.preference();
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEY, pref);
      } catch {
        /* ignore */
      }
      this.applyDom(pref);
    });

    if (isPlatformBrowser(this.platformId) && typeof window.matchMedia === 'function') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', () => {
        if (this.preference() === 'system') {
          this.applyDom('system');
        }
      });
    }
  }

  setPreference(value: ThemePreference): void {
    this.preference.set(value);
  }

  private readStored(): ThemePreference {
    if (!isPlatformBrowser(this.platformId)) {
      return 'system';
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'light' || raw === 'dark' || raw === 'system') {
        return raw;
      }
    } catch {
      /* ignore */
    }
    return 'system';
  }

  private applyDom(pref: ThemePreference): void {
    const root = this.doc.documentElement;
    const dark =
      pref === 'dark' ||
      (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
  }
}
