import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { PlaylistInterface } from '@spotify-api';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block'
  }
})
export class PlaylistCardComponent {
  @Input()
  playlist: PlaylistInterface | null = null;

  @Output()
  playlistClick = new EventEmitter<string>();
}
