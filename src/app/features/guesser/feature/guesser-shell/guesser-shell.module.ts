import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuesserShellRoutingModule } from './guesser-shell-routing.module';
import { GuesserShellComponent } from './guesser-shell.component';

@NgModule({
  declarations: [
    GuesserShellComponent
  ],
  imports: [
    CommonModule,
    GuesserShellRoutingModule
  ],
  exports: [
    GuesserShellComponent
  ]
})
export class GuesserShellModule { }
