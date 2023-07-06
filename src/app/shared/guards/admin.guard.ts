

import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { PAGE_URL } from '../const/pageUrl';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      if (this.isTokenExpired()) {
        return this.router.parseUrl('login');;
      }
      return true;
    }
    this.router.navigate([`/${PAGE_URL.PUBLIC_LOGIN}`]);
    return false;
  }

  isTokenExpired(): boolean {
    let token = this.authService.token;
    let payload = this.authService.getDataToken(token);
    let now = new Date().getTime() / 1000; // fecha Actual en Segundos
    if(payload == undefined || payload.exp < now){
      return true;
    }    
    return false;
  }
}
