import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { PlaylistInterface, PlaylistsService } from '@spotify-api';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsStoreService {
  playlists$ = new BehaviorSubject<PlaylistInterface[]>([]);

  selectedPlaylistId$ = new BehaviorSubject<string | null>(null);

  selectedPlaylist$ = new BehaviorSubject<PlaylistInterface | null>(null);

  constructor(private playlistsService: PlaylistsService) { }

  getCurrentUsersPlaylists(): void {
    this.playlistsService.getCurrentUsersPlaylists()
      .pipe(
        map((response) => response.items),
        tap((playlists) => this.playlists$.next(playlists))
      )
      .subscribe();
  }

  getFullPlaylistById(id: string): Observable<PlaylistInterface> {
    return this.playlistsService.getFullPlaylistById(id)
      .pipe(
        map((playlist) => ({
          ...playlist,
          tracks: {
            ...playlist.tracks,
            items: playlist.tracks.items.filter((item) => item.track.preview_url)
          }
        }))
      );
  }
}
