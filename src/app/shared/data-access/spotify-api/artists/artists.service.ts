import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from '../url-builder/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }
}
