import {
  ExternalUrlsInterface,
  FollowersInformationInterface,
  ImageResourceInterface,
  ObjectTypeEnum
} from '../spotify-api.types';

export interface UserInterface {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  },
  external_urls: ExternalUrlsInterface;
  followers: FollowersInformationInterface,
  href: string;
  id: string;
  images: ImageResourceInterface[],
  product: string;
  type: ObjectTypeEnum.User;
  uri: string;
}
