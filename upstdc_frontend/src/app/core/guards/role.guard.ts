import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

/**
 * PUBLIC_INTERFACE
 * Guard that checks presence of token; for fine-grained roles, backend should validate via endpoints.
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const tokens = inject(TokenService);
  const router = inject(Router);
  const expectedRoles = (route.data?.['roles'] as string[]) || [];
  // For MVP we only check token existence; role fetch would be from /me if needed.
  if (tokens.isAuthenticated()) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
