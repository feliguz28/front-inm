

import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree => {
    if (this.authService.isAdmin()) {
      return true; // El usuario es un administrador, permitir el acceso a la ruta
    } else {
      // Redirigir a una página de acceso no autorizado o mostrar un mensaje de error
      return this.router.parseUrl('/main');
    }
  }
}
