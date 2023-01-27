import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStoreService } from '@shared/store/auth-store.service';
import { GlobalPreloaderService } from '@shared/components/global-preloader/global-preloader.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-grow-1 justify-content-center align-items-center'
  }
})
export class HomePageComponent {
  constructor(
    private authStoreService: AuthStoreService,
    private router: Router,
    private preloaderService: GlobalPreloaderService
  ) {}

  onSignIn(): void {
    this.preloaderService.setIsLoading(true);

    this.authStoreService.signIn()
      .subscribe(() => {
        this.router.navigate(['guesser/playlists']);

        this.preloaderService.setIsLoading(false);
      });
  }
}
