import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { Howl } from 'howler';

import { GameLevelInterface, GuessItemInterface } from '@shared/store/play-facade.service';

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameLevelComponent implements OnChanges, OnDestroy {
  @Input()
  gameLevel: GameLevelInterface | null = null;

  @Output()
  guessSelected = new EventEmitter<GuessItemInterface>();

  audioPreview: Howl | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gameLevel'].currentValue) {
      this.audioPreview?.unload();

      this.audioPreview = new Howl({
        src: this.gameLevel!.correct.audio,
        volume: 0.5,
        format: 'mp3',
        onload: () => {
          this.audioPreview?.play();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.audioPreview?.unload();
  }
}
