import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { shuffle } from 'lodash-es';

import { PlaylistInterface, PlaylistItemInterface } from '@spotify-api';
import { PlaylistsStoreService } from '@shared/store/playlists-store.service';
import { GlobalPreloaderService } from '@shared/components/global-preloader/global-preloader.service';

export enum GameStageEnum {
  Loading,
  Ready,
  Playing,
  Finished
}

export interface GuessItemInterface {
  id: string;
  audio: string;
  fullName: string;
  image: string;
}

export interface GameLevelInterface {
  correct: GuessItemInterface;
  guesses: GuessItemInterface[];
}

export interface GameStateInterface {
  score: number;
  currentLevelIndex: number;
  currentLevel: GameLevelInterface | null;
  levels: GameLevelInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class PlayFacadeService {
  gameStage$ = new BehaviorSubject<GameStageEnum>(GameStageEnum.Loading);

  gameState$ = new BehaviorSubject<GameStateInterface>({
    score: 0,
    currentLevelIndex: 0,
    currentLevel: null,
    levels: []
  });

  playlist$ = new BehaviorSubject<PlaylistInterface | null>(null);

  private tracks$ = new BehaviorSubject<PlaylistItemInterface[]>([]);

  constructor(
    private playlistStoreService: PlaylistsStoreService,
    private preloaderService: GlobalPreloaderService
  ) { }

  initLevel(playlistId: string): void {
    this.preloaderService.setIsLoading(true);

    this.playlistStoreService.getFullPlaylistById(playlistId)
      .pipe(
        tap(() => this.preloaderService.setIsLoading(false))
      )
      .subscribe((playlist) => {
        this.playlist$.next(playlist);

        this.tracks$.next(playlist.tracks.items);

        this.preloaderService.setIsLoading(false);

        this.gameStage$.next(GameStageEnum.Ready);
      });
  }

  play(): void {
    const randomizedTracks = shuffle(this.tracks$.value);

    const levels = this.generateLevels(randomizedTracks);

    this.gameState$.next({
      score: 0,
      currentLevel: levels[0],
      currentLevelIndex: 0,
      levels
    });

    console.log(randomizedTracks.length);
    console.log(levels);

    this.gameStage$.next(GameStageEnum.Playing);
  }

  checkGuess(guess: GuessItemInterface): boolean {
    if (this.gameState$.value.currentLevel?.correct.id === guess.id) {
      this.gameState$.next({
        ...this.gameState$.value,
        score: this.gameState$.value.score + 1
      });

      return true;
    } else {
      return false;
    }
  }

  next(): void {
    const nextLevelIndex = this.gameState$.value.currentLevelIndex + 1;

    this.gameState$.next({
      ...this.gameState$.value,
      currentLevel: this.gameState$.value.levels[nextLevelIndex],
      currentLevelIndex: nextLevelIndex,
    });
  }

  private generateLevels(tracks: PlaylistItemInterface[]): GameLevelInterface[] {
    const levels: GameLevelInterface[] = [];

    for (let i = 0; i < tracks.length; i += 4) {
      levels.push(this.generateLevel(tracks[i], tracks[i + 1], tracks[i + 2], tracks[i + 3]))
    }

    return levels;
  }

  private generateLevel(
    correctTrack: PlaylistItemInterface,
    ...others: PlaylistItemInterface[]
  ): GameLevelInterface {
    const correct: GuessItemInterface = {
      id: correctTrack.track.id,
      audio: correctTrack.track.preview_url!,
      fullName: correctTrack.track.name,
      image: correctTrack.track.album.images[0].url
    };

    const guesses: GuessItemInterface[] = [
      correct
    ];

    for (const other of others) {
      if (other) {
        guesses.push({
          id: other.track.id,
          audio: other.track.preview_url!,
          fullName: other.track.name,
          image: other.track.album.images[0].url
        });
      }
    }

    return {
      correct,
      guesses: shuffle(guesses)
    }
  }
}
