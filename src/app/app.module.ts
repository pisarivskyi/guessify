import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { filter, Observable, take } from 'rxjs';
import { isBoolean } from 'lodash-es';

import { SpotifyApiModule } from '@spotify-api';
import { AuthStoreService } from '@shared/store/auth-store.service';
import { environment } from '@environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpotifyApiModule.forRoot({
      clientId: environment.clientId
    }),
    AppRoutingModule
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
