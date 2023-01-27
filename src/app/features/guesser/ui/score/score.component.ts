import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GameStateInterface } from '@shared/store/play-facade.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-column'
  }
})
export class ScoreComponent {
  @Input()
  gameState: GameStateInterface | null = null;
}
