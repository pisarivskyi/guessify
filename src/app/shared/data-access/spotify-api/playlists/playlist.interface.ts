import {
  BaseRequestInterface,
  ExternalUrlsInterface,
  FollowersInformationInterface,
  ImageResourceInterface,
  ObjectTypeEnum
} from '../spotify-api.types';
import { UserInterface } from '../users';
import { TrackInterface } from '../tracks';

export interface PlaylistItemInterface {
  added_at: Date | string;
  added_by: Pick<UserInterface, 'external_urls' | 'followers' | 'href' | 'id' | 'type' | 'uri' | 'display_name'>
  is_local: boolean;
  primary_color: any;
  track: TrackInterface;
  video_thumbnail: {
    url: null;
  };
}

export interface PlaylistInterface {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrlsInterface;
  followers: FollowersInformationInterface;
  href: string;
  id: string;
  images: ImageResourceInterface[];
  name: string;
  owner: Pick<UserInterface, 'external_urls' | 'followers' | 'href' | 'id' | 'type' | 'uri' | 'display_name'>;
  public: boolean;
  snapshot_id: string;
  tracks: BaseRequestInterface<PlaylistItemInterface>;
  type: ObjectTypeEnum.Playlist;
  uri: string
}
