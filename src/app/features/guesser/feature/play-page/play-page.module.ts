import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { ScoreModule } from '@guesser/ui/score/score.module';
import { GameLevelModule } from '@guesser/ui/game-level/game-level.module';
import { PlayPageRoutingModule } from './play-page-routing.module';
import { PlayPageComponent } from './play-page.component';

@NgModule({
  declarations: [
    PlayPageComponent
  ],
  imports: [
    CommonModule,
    PlayPageRoutingModule,
    ButtonModule,
    GameLevelModule,
    NgOptimizedImage,
    ToastModule,
    ScoreModule
  ],
  providers: [
    MessageService
  ]
})
export class PlayPageModule { }
