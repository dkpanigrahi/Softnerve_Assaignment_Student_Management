import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  
  if (loginService.isLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
