import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { GameLevelComponent } from './game-level.component';

@NgModule({
  declarations: [
    GameLevelComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    GameLevelComponent
  ]
})
export class GameLevelModule { }
