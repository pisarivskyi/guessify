export interface AuthConfigInterface {
  clientId: string;
}

export interface AuthParamsInterface {
  clientId?: string;
  redirectUrl: string;
  responseType: ResponseTypeEnum;
  scopes?: ScopeEnum[];
  showDialog?: boolean;
  state?: string;
}

export enum ResponseTypeEnum {
  Token = 'token',
  Code = 'code',
}

export enum ScopeEnum {
  AppRemoteControl = 'app-remote-control',
  PlaylistModifyPrivate = 'playlist-modify-private',
  PlaylistModifyPublic = 'playlist-modify-public',
  PlaylistReadCollaborative = 'playlist-read-collaborative',
  PlaylistReadPrivate = 'playlist-read-private',
  Streaming = 'streaming',
  UgcImageUpload = 'ugc-image-upload',
  UserFollowModify = 'user-follow-modify',
  UserFollowRead = 'user-follow-read',
  UserLibraryModify = 'user-library-modify',
  UserLibraryRead = 'user-library-read',
  UserModifyPlaybackState = 'user-modify-playback-state',
  UserReadCurrentlyPlaying = 'user-read-currently-playing',
  UserReadEmail = 'user-read-email',
  UserReadPlaybackPosition = 'user-read-playback-position',
  UserReadPlaybackState = 'user-read-playback-state',
  UserReadPrivate = 'user-read-private',
  UserReadRecentlyPlayed = 'user-read-recently-played',
  UserTopRead = 'user-top-read',
}
