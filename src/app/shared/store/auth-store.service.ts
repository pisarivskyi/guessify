import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, fromEvent, map, Observable, of, take, tap, throwError } from 'rxjs';
import { isString } from 'lodash-es';

import { AuthService, ResponseTypeEnum, ScopeEnum, UsersService } from '@spotify-api';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  isAuthorized$ = new BehaviorSubject<boolean | null>(null);

  private readonly tokenLocalHostKey = 'guessifyToken';

  constructor(private authService: AuthService, private usersService: UsersService) { }

  initialize(): void {
    const token = this.loadToken();

    if (token) {
      this.authService.setAccessToken(token);

      this.usersService.getMe()
        .pipe(
          catchError((error) => {
            this.logOut();

            this.isAuthorized$.next(false);

            return throwError(error)
          })
        )
        .subscribe(() => {
          this.isAuthorized$.next(true);
        });
    } else {
      this.isAuthorized$.next(false);
    }
  }

  signIn(): Observable<string | null> {
    const openedWindow = this.openSignInWindow();

    if (openedWindow) {
      return fromEvent<MessageEvent>(window, 'message')
        .pipe(
          filter((event) => isString(event.data)),
          map((event) => JSON.parse(event.data)),
          filter((data) => data.guessify),
          map((data) => data.guessify.access_token),
          take(1),
          tap((accessToken) => {
            this.authService.setAccessToken(accessToken!);

            this.isAuthorized$.next(true);

            this.saveToken(accessToken);
          }),
        );
    }

    return of(null);
  }

  private openSignInWindow(): Window | null {
    const authUrl = this.authService.getAuthUrl({
      responseType: ResponseTypeEnum.Token,
      redirectUrl: environment.redirectUrl,
      scopes: [
        ScopeEnum.PlaylistModifyPrivate,
        ScopeEnum.PlaylistModifyPublic,
        ScopeEnum.PlaylistReadPrivate,
        ScopeEnum.PlaylistReadCollaborative
      ],
      showDialog: false
    });

    const windowWidth = 450;
    const windowHeight = 730;

    const windowTop = (window.screen.height / 2) - (windowHeight / 2);
    const windowLeft = (window.screen.width / 2) - (windowWidth / 2);

    return window.open(
      authUrl,
      'Spotify',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no,' +
      `width=${windowWidth},height=${windowHeight},top=${windowTop},left=${windowLeft}`
    );
  }

  logOut(): void {
    this.authService.setAccessToken('');

    localStorage.removeItem(this.tokenLocalHostKey);
  }

  private loadToken(): string | null {
    const rawToken = localStorage.getItem(this.tokenLocalHostKey);

    return (rawToken) ? JSON.parse(rawToken) : null;
  }

  private saveToken(token: string | null): void {
    localStorage.setItem(this.tokenLocalHostKey, JSON.stringify(token));
  }
}
