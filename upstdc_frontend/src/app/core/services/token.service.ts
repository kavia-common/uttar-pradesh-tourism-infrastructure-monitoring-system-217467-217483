import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private storageKey = 'upstdc_jwt';
  private platformId = inject(PLATFORM_ID);

  // PUBLIC_INTERFACE
  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    const ls: any = (typeof globalThis !== 'undefined' && (globalThis as any)['localStorage']) || null;
    return ls ? ls.getItem(this.storageKey) : null;
  }

  // PUBLIC_INTERFACE
  setToken(token: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const ls: any = (typeof globalThis !== 'undefined' && (globalThis as any)['localStorage']) || null;
    if (ls) ls.setItem(this.storageKey, token);
  }

  // PUBLIC_INTERFACE
  clearToken(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const ls: any = (typeof globalThis !== 'undefined' && (globalThis as any)['localStorage']) || null;
    if (ls) ls.removeItem(this.storageKey);
  }

  // PUBLIC_INTERFACE
  isAuthenticated(): boolean {
    const t = this.getToken();
    return !!t;
  }
}
