import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchForGuessComponent } from './search-for-guess.component';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SearchForGuessComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    SearchForGuessComponent
  ]
})
export class SearchForGuessModule { }
