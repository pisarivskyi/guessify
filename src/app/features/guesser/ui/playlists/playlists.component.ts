import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { PlaylistInterface } from '@spotify-api';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistsComponent {
  @Input()
  playlists: PlaylistInterface[] | null = null;

  @Output()
  selectPlaylist = new EventEmitter<string>();

  onSelectPlaylist(id: string): void {
    this.selectPlaylist.emit(id);
  }
}
