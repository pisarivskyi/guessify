import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaylistItemInterface } from '@spotify-api';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TracksListComponent {
  @Input()
  tracks: PlaylistItemInterface[] | null = null;

  @Output()
  playPreview = new EventEmitter<string>();

  onPlayPreview(url: string): void {
    this.playPreview.emit(url);
  }
}
