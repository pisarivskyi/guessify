import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsComponent } from './playlists.component';

@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaylistsComponent
  ]
})
export class PlaylistsModule { }
