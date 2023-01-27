import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlaylistsStoreService } from '@shared/store/playlists-store.service';

@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styleUrls: ['./playlists-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistsPageComponent implements OnInit {
  playlists$ = this.playlistsStoreService.playlists$;

  constructor(
    private playlistsStoreService: PlaylistsStoreService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.playlistsStoreService.getCurrentUsersPlaylists();
  }

  onPlaylistSelect(playlistId: string): void {
    this.playlistsStoreService.selectedPlaylistId$.next(playlistId);

    this.router.navigate(['guesser', 'play', playlistId]);
  }
}
