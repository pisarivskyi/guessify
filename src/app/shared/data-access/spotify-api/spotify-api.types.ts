export interface PaginationQueryParamsInterface {
  limit: number;
  offset: number;
}

export interface MarketQueryParamsInterface {
  market: string;
}

export interface BaseRequestInterface<T> extends PaginationQueryParamsInterface {
  href: string;
  items: T[];
  next: string;
  previous: string;
  total: number;
}

export interface ExternalUrlsInterface {
  spotify: string;
  [key: string]: string;
}

export enum ObjectTypeEnum {
  Album = 'album',
  Artist = 'artist',
  Playlist = 'playlist',
  Track = 'track',
  Show = 'show',
  Episode = 'episode',
}

export interface FollowersInformationInterface {
  href: string;
  total: number;
}

export interface ImageResourceInterface {
  url: string;
  height: number;
  width: number;
}
