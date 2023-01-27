import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuesserPageComponent } from './guesser-page.component';

const routes: Routes = [
  {
    path: '',
    component: GuesserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuesserPageRoutingModule { }
