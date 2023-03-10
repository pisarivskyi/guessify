import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-global-preloader></app-global-preloader>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-column h-full flex-grow-1'
  }
})
export class AppComponent {}
