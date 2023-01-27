import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuesserShellComponent } from './guesser-shell.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'playlists',
  },
  {
    path: '',
    component: GuesserShellComponent,
    children: [
      {
        path: 'playlists',
        loadChildren: () => import('@guesser/feature/playlists-page/playlists-page.module')
          .then((m) => m.PlaylistsPageModule)
      },
      {
        path: 'play/:playlistId',
        loadChildren: () => import('@guesser/feature/play-page/play-page.module')
          .then((m) => m.PlayPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuesserShellRoutingModule { }
