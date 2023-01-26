import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStoreService } from '@shared/store/auth-store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  constructor(private authStoreService: AuthStoreService, private router: Router) {}

  onSignIn(): void {
    this.authStoreService.signIn().subscribe();
  }

  onGuesserPage(): void {
    this.router.navigate(['guesser'])
  }
}
