import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpotifyApiModule } from '@spotify-api';
import { AuthorizedOnlyGuard } from '@shared/guards/authorized-only.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@home/feature/home-page.module')
      .then((m) => m.HomePageModule)
  },
  {
    path: 'guesser',
    loadChildren: () => import('@guesser/feature/guesser-shell/guesser-shell.module')
      .then((m) => m.GuesserShellModule),
    canActivate: [
      AuthorizedOnlyGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SpotifyApiModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
