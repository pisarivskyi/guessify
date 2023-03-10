import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';

import { MessageService } from 'primeng/api';

import { GameStageEnum, GuessItemInterface, PlayFacadeService } from '@shared/store/play-facade.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-column flex-grow-1'
  }
})
export class PlayPageComponent implements OnInit, OnDestroy {
  gameStage$ = this.playFacadeService.gameState$.pipe(
    map((state) => state.stage)
  );

  gameState$ = this.playFacadeService.gameState$;

  gameLevel$ = this.playFacadeService.gameState$.pipe(
    map((state) => state.currentLevel)
  );

  playlist$ = this.playFacadeService.playlist$;

  GameStageEnum = GameStageEnum;

  constructor(
    private playFacadeService: PlayFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(take(1))
      .subscribe(({ playlistId }) => this.playFacadeService.initLevel(playlistId));
  }

  ngOnDestroy(): void {
    this.playFacadeService.resetGameState();
  }

  onStart(): void {
    this.playFacadeService.play();
  }

  onGoBack(): void {
    this.router.navigate(['../../', 'playlists'], {
      relativeTo: this.activatedRoute
    });
  }

  onGuessSelected(guess: GuessItemInterface): void {
    this.gameLevel$.pipe(take(1))
      .subscribe((currentLevel) => {
        if (this.playFacadeService.checkGuess(guess)) {
          this.messageService.add({
            severity: 'success',
            summary: 'Congratz!',
            detail: 'Your guess is correct!',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Bad :(',
            detail: `You are wrong. That was ${currentLevel?.correct.fullName}` ,
          });
        }

        this.playFacadeService.next();
      });
  }
}
