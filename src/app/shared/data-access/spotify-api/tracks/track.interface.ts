import { AlbumInterface } from '../albums';
import { ArtistInterface } from '../artists';

export interface TrackInterface {
  id: string;
  album: AlbumInterface;
  artists: ArtistInterface[];
  popularity: number;
  preview_url?: string;
  name: string;
}
