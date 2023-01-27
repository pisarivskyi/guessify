import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AUTH_CONFIG } from './auth/auth-config.token';
import { AlbumsService } from './albums';
import { ArtistsService } from './artists';
import { AuthConfigInterface, AuthService, TokenInterceptor } from './auth';
import { HOST_CONFIG, hostConfig } from './config';
import { PlaylistsService } from './playlists';
import { TracksService } from './tracks';
import { UrlBuilderService } from './url-builder';
import { UsersService } from './users';
import { SearchService } from './search';
import { CategoriesService } from './categories';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SpotifyApiModule {
  static forRoot(config: AuthConfigInterface): ModuleWithProviders<SpotifyApiModule> {
    return {
      ngModule: SpotifyApiModule,
      providers: [
        AlbumsService,
        ArtistsService,
        AuthService,
        PlaylistsService,
        TracksService,
        UrlBuilderService,
        UsersService,
        SearchService,
        CategoriesService,
        { provide: AUTH_CONFIG, useValue: config },
        { provide: HOST_CONFIG, useValue: hostConfig },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      ]
    };
  }
}
