import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UrlBuilderService } from '../url-builder';
import { BaseRequestInterface } from '../spotify-api.types';
import { PlaylistInterface } from './playlist.interface';

@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  getCurrentUsersPlaylists(): Observable<BaseRequestInterface<PlaylistInterface>> {
    return this.http.get<BaseRequestInterface<PlaylistInterface>>(
      this.urlBuilder.build(['me', 'playlists'])
    );
  }

  createPlaylist(userId: string, name: string): Observable<PlaylistInterface> {
    return this.http.post<PlaylistInterface>(
      this.urlBuilder.build(['users', userId, 'playlists']),
      {
        name
      }
    );
  }
}
