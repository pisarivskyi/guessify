import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyApiModule } from '@spotify-api';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), SpotifyApiModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
