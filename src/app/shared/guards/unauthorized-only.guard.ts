import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthStoreService } from '@shared/store/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedOnlyGuard implements CanActivate {
  constructor(private authStoreService: AuthStoreService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStoreService.isAuthorized$
      .pipe(
        map((isAuthorized) => !isAuthorized || this.router.parseUrl('/'))
      );
  }
}
