import { Inject, Injectable } from '@angular/core';
import { HOST_CONFIG, SpotifyHostConfigInterface } from '../config';

@Injectable()
export class UrlBuilderService {
  constructor(@Inject(HOST_CONFIG) private hostConfig: SpotifyHostConfigInterface) {
  }

  build(parts: string[]): string {
    return `${this.hostConfig.host}/${parts.join('/')}`
  }
}
