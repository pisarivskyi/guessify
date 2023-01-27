import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  CategoriesInterface, CategoryInterface,
  PaginationQueryParamsInterface,
  UrlBuilderService
} from '@shared/data-access/spotify-api';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  getCategories(params: PaginationQueryParamsInterface = {
    limit: 50,
    offset: 0
  }): Observable<CategoriesInterface> {
    return this.http.get<CategoriesInterface>(
      this.urlBuilder.build(['browse', 'categories']),
      {
        params: new HttpParams({
          fromObject: {...params}
        })
      }
    );
  }

  getCategoryById(id: string): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(
      this.urlBuilder.build(['browse', 'categories', id])
    );
  }
}
