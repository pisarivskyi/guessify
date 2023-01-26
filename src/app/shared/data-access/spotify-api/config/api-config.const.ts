export interface SpotifyHostConfigInterface {
  authHost: string;
  host: string;
}

export const hostConfig: SpotifyHostConfigInterface = {
  authHost: 'https://accounts.spotify.com/authorize',
  host: 'https://api.spotify.com/v1'
}
