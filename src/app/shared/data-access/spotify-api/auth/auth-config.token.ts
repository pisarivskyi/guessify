import { InjectionToken } from '@angular/core';

import { AuthConfigInterface } from './auth.types';

export const AUTH_CONFIG = new InjectionToken<AuthConfigInterface>('angular-spotify-auth-config')
