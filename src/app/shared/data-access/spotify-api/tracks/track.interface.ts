import { AlbumInterface } from '../albums';
import { ArtistInterface } from '../artists';

export interface TrackInterface {
  album: AlbumInterface;
  artists: ArtistInterface[];
  popularity: number;
  preview_url: string;
}
