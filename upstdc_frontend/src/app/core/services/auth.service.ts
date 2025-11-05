import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { Observable, map, of } from 'rxjs';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  role: string;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private api: ApiService, private tokens: TokenService) {}

  // PUBLIC_INTERFACE
  login(payload: LoginPayload): Observable<AuthUser> {
    // Expect backend to return {token, user:{...}}
    return this.api.post<AuthUser>('/auth/login', payload).pipe(
      map((res: any) => {
        const token = res?.token || res?.accessToken;
        if (token) this.tokens.setToken(token);
        return { ...(res?.user || {}), token } as AuthUser;
      })
    );
  }

  // PUBLIC_INTERFACE
  logout(): void {
    this.tokens.clearToken();
  }

  // PUBLIC_INTERFACE
  currentUser(): Observable<AuthUser | null> {
    // If needed, call backend /me; here return null if no token
    if (!this.tokens.isAuthenticated()) return of(null);
    return this.api.get<AuthUser>('/auth/me');
  }
}
