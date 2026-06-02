import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../../core/service/auth';

export const authGuard: CanActivateFn = async () => {

  const authService = inject(Auth);
  const router = inject(Router);

  const session =
    await authService.getSession();

  if (session) {
    return true;
  }

  return router.parseUrl('/login');
};