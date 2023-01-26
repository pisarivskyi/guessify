import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpotifyApiModule } from '@spotify-api';
import { AuthorizedOnlyGuard } from '@shared/guards/authorized-only.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@home/feature/home-page-routing.module')
      .then((m) => m.HomePageRoutingModule)
  },
  {
    path: 'guesser',
    loadChildren: () => import('@guesser/feature/guesser-page-routing.module')
      .then((m) => m.GuesserPageRoutingModule),
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
