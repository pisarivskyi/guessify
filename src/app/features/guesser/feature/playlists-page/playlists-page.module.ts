import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistCardModule } from '@guesser/ui/playlist-card/playlist-card.module';
import { PlaylistsPageRoutingModule } from './playlists-page-routing.module';
import { PlaylistsPageComponent } from './playlists-page.component';


@NgModule({
  declarations: [
    PlaylistsPageComponent
  ],
  imports: [
    CommonModule,
    PlaylistsPageRoutingModule,
    PlaylistCardModule
  ]
})
export class PlaylistsPageModule { }
