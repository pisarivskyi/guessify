import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-guesser-shell',
  templateUrl: './guesser-shell.component.html',
  styleUrls: ['./guesser-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-column flex-grow-1 p-3'
  }
})
export class GuesserShellComponent {}
