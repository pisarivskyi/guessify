import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, expand, EMPTY, reduce } from 'rxjs';

import { UrlBuilderService } from '../url-builder';
import { BaseRequestInterface, PaginationQueryParamsInterface } from '../spotify-api.types';
import { PlaylistInterface, PlaylistItemInterface } from './playlist.interface';

@Injectable()
export class PlaylistsService {

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  getCurrentUsersPlaylists(params: PaginationQueryParamsInterface = {
    limit: 50,
    offset: 0
  }): Observable<BaseRequestInterface<PlaylistInterface>> {
    return this.http.get<BaseRequestInterface<PlaylistInterface>>(
      this.urlBuilder.build(['me', 'playlists']),
      {
        params: new HttpParams({
          fromObject: {...params}
        })
      }
    );
  }

  getPlaylistById(id: string): Observable<PlaylistInterface> {
    return this.http.get<PlaylistInterface>(
      this.urlBuilder.build(['playlists', id])
    );
  }

  getPlaylistItems(id: string, params: PaginationQueryParamsInterface = {
    limit: 50,
    offset: 0
  }): Observable<BaseRequestInterface<PlaylistItemInterface>> {
    return this.http.get<BaseRequestInterface<PlaylistItemInterface>>(
      this.urlBuilder.build(['playlists', id, 'tracks']),
      {
        params: new HttpParams({
          fromObject: {...params}
        })
      }
    );
  }

  getFullPlaylistById(id: string): Observable<PlaylistInterface> {
    return this.getPlaylistById(id).pipe(
      expand((res: any) => {
        const nextUrl = res?.tracks?.next || res.next;
        return (nextUrl) ? this.http.get<BaseRequestInterface<PlaylistItemInterface>>(nextUrl) : EMPTY;
      }),
      reduce((acc, val: any, index) => {
        if (index === 0) {
          acc = val;
        } else {
          acc.tracks.items.push(...val.items);
        }

        return acc;
      }, {} as PlaylistInterface)
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
