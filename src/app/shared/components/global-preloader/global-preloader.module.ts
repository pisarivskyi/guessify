import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { GlobalPreloaderComponent } from './global-preloader.component';

@NgModule({
  declarations: [
    GlobalPreloaderComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
  ],
  exports: [
    GlobalPreloaderComponent
  ]
})
export class GlobalPreloaderModule { }
