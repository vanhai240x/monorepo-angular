import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { PAGE_HOME, PAGE_LOGIN } from '@dkaccess/share-utils';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {
  private url = '';

  constructor(private router: Router, private authService: AuthService) {}
  canActivate(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    this.url = routerState.url;
    if (this.isAuthenticated()) {
      return this.handleAuthenticationState();
    }
    return this.handleNotAuthenticationState(routerState);
  }

  private isAuthenticated(): boolean {
    const token = this.authService.getAuthorization();
    return !!token;
  }

  private handleAuthenticationState(): boolean {
    if (this.isLogin()) {
      this.router.navigate([PAGE_HOME]);
      return false;
    }
    return true;
  }

  private handleNotAuthenticationState(routerState: RouterStateSnapshot): boolean {
    if (this.isLogin()) {
      return true;
    } else {
      this.router.navigate([PAGE_LOGIN], { queryParams: { redirectURL: routerState.url } });
      return false;
    }
  }

  private isLogin(): boolean {
    if (this.url.includes('authentication')) {
      return true;
    }
    return false;
  }
}
