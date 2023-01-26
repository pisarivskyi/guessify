import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from '../url-builder';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }
}
