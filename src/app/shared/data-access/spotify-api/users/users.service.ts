import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UrlBuilderService } from '../url-builder';
import { UserInterface } from './user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private urlBuilder: UrlBuilderService) { }

  getMe(): Observable<UserInterface> {
    return this.http.get<UserInterface>(
      this.urlBuilder.build(['me'])
    );
  }
}
