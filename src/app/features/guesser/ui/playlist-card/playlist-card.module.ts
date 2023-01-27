import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PlaylistCardComponent } from './playlist-card.component';

@NgModule({
  declarations: [
    PlaylistCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    PlaylistCardComponent
  ]
})
export class PlaylistCardModule { }
