import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { isNil } from 'lodash-es';

import { AuthConfigInterface, AuthParamsInterface } from './auth.types';
import { HOST_CONFIG, SpotifyHostConfigInterface } from '../config';
import { AUTH_CONFIG } from './auth-config.token';

@Injectable()
export class AuthService {
  private token!: string;

  constructor(
    @Inject(HOST_CONFIG) private hostConfig: SpotifyHostConfigInterface,
    @Inject(AUTH_CONFIG) private authConfig: AuthConfigInterface,
  ) {
  }

  getAuthUrl(params: AuthParamsInterface): string {
    const obj = {
      client_id: params.clientId || this.authConfig.clientId,
      response_type: params.responseType,
      redirect_uri: params.redirectUrl,
      ...((params.scopes) ? { scope: params.scopes.join(' ') } : {} ),
      ...((!isNil(params.showDialog)) ? { show_dialog: params.showDialog } : {} ),
    };

    const queryParams = new HttpParams({
      fromObject: obj
    });

    return `${this.hostConfig.authHost}?${queryParams.toString()}`;
  }

  setAccessToken(accessToken: string): void {
    this.token = accessToken;
  }

  getAccessToken(): string {
    return this.token;
  }
}
