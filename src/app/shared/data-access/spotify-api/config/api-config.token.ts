import { InjectionToken } from '@angular/core';

import { SpotifyHostConfigInterface } from './api-config.const';

export const HOST_CONFIG = new InjectionToken<SpotifyHostConfigInterface>('angular-spotify-host-config');
