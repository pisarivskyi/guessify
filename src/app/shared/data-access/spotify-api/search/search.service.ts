import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from '../url-builder/url-builder.service';
import { Observable } from 'rxjs';
import { SearchResultInterface } from './search.types';
import { ObjectTypeEnum } from '../spotify-api.types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  searchForItem(query: string, types: ObjectTypeEnum[]): Observable<SearchResultInterface> {
    return this.http.get<SearchResultInterface>(
      this.urlBuilder.build(['search']),
      {
        params: {
          q: query,
          type: types.join(',')
        }
      }
    );
  }
}
