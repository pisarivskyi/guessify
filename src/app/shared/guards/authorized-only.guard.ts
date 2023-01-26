import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthStoreService } from '../store/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedOnlyGuard implements CanActivate {
  constructor(private authFacade: AuthStoreService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authFacade.isAuthorized$
      .pipe(
        map((isAuthorized) =>
          isAuthorized || this.router.parseUrl('/')
        )
      );
  }
}
