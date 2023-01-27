import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { PlaylistInterface, PlaylistItemInterface, PlaylistsService, TrackInterface } from '@spotify-api';
import { PlaylistsStoreService } from '@shared/store/playlists-store.service';
import { BehaviorSubject, map } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-guesser-page',
  templateUrl: './guesser-page.component.html',
  styleUrls: ['./guesser-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuesserPageComponent implements OnInit {
  playlists$ = this.playlistsStoreService.playlists$;

  tracks$ = new BehaviorSubject<PlaylistItemInterface[]>([]);

  sound: any;

  selectedPlaylist: any;

  selectedTrack: TrackInterface | null = null;

  alreadyPlayedTracksIds: string[] = [];

  guessedCorrectly = 0;

  constructor(
    private playlistsStoreService: PlaylistsStoreService,
    private playlistsService: PlaylistsService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
  }

  onPlaylistSelect(a: { value: PlaylistInterface }): void {
    this.playlistsService.getFullPlaylistById(a.value.id)
      .pipe(
        map((playlist) => playlist.tracks.items)
      )
      .subscribe((items) => {
        this.tracks$.next(
          items.filter((item) => item.track.preview_url)
        );
      });
  }

  onPlayRandom(): void {
    this.selectedTrack = this.getRandomTrack();

    this.sound?.stop();

    this.sound = new Howl({
      src: this.selectedTrack.preview_url!,
      volume: 0.5,
      format: 'mp3',
      onload: () => {
        this.sound.play();
      }
    });
  }

  random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  getRandomTrack(): TrackInterface {
    let randomTrack: TrackInterface;

    do {
      const randomIndex = this.random(0, this.tracks$.value.length - 1);
      randomTrack = this.tracks$.value[randomIndex].track;
    } while (
      this.alreadyPlayedTracksIds.includes(randomTrack.id)
      && this.alreadyPlayedTracksIds.length !== this.tracks$.value.length
    )

    this.alreadyPlayedTracksIds.push(randomTrack.id);

    return randomTrack;
  }

  onSelectTrack(track: TrackInterface): void {
    if (track.id === this.selectedTrack!.id) {
      this.messageService.add({
        severity: 'success',
        summary: 'Congratz!',
        detail: 'Your guess is correct!',
      });

      this.guessedCorrectly++;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Bad :(',
        detail: 'You are wrong. That was',
      });
    }

    this.onPlayRandom();
  }

  onSkip(): void {
    this.onPlayRandom();
  }
}
