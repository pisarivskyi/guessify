import { ArtistInterface } from '../artists';
import { TrackInterface } from '../tracks';
import { AlbumInterface } from '../albums';
import { BaseRequestInterface } from '../spotify-api.types';


export interface SearchResultInterface {
  tracks?: BaseRequestInterface<TrackInterface>;
  artists?: BaseRequestInterface<ArtistInterface>;
  albums?: BaseRequestInterface<AlbumInterface>;
  playlists?: BaseRequestInterface<any>;
  shows?: BaseRequestInterface<any>;
  episodes?: BaseRequestInterface<any>;
}
