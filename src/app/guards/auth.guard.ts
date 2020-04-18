import { Injectable } from '@angular/core';
import {
  CanActivate, CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree,
  Router, CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateUser();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isAdmin) {
      return true;
    }
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateUser();
  }

  validateUser() {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
