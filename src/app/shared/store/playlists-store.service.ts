import { Injectable } from '@angular/core';
import { PlaylistsService } from '@spotify-api';
import { map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsStoreService {
  playlists$ = this.playlistsService.getCurrentUsersPlaylists()
    .pipe(
      map((response) => response.items),
      shareReplay(1)
    );

  constructor(private playlistsService: PlaylistsService) { }
}
