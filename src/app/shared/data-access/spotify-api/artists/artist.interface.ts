import {
  ExternalUrlsInterface,
  FollowersInformationInterface,
  ImageResourceInterface,
  ObjectTypeEnum
} from '../spotify-api.types';

export interface ArtistInterface {
  external_urls: ExternalUrlsInterface;
  followers: FollowersInformationInterface,
  genres: string[];
  href: string;
  id: string;
  images: ImageResourceInterface[];
  name: string;
  popularity: number;
  type: ObjectTypeEnum;
  uri: string;
}
