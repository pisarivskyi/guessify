import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { filter, Observable, take } from 'rxjs';
import { isBoolean } from 'lodash-es';

import { SpotifyApiModule } from '@spotify-api';
import { AuthStoreService } from '@shared/store/auth-store.service';
import { environment } from '@environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalPreloaderModule } from '@shared/components/global-preloader/global-preloader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpotifyApiModule.forRoot({
      clientId: environment.clientId
    }),
    AppRoutingModule,
    GlobalPreloaderModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializeAppFactory,
      deps: [AuthStoreService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFactory(authStoreService: AuthStoreService): () => Observable<any> {
  authStoreService.initialize();

  return () => authStoreService.isAuthorized$
    .pipe(
      filter((isAuthorized) => isBoolean(isAuthorized)),
      take(1)
    );
}
