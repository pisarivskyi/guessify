import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';

import { PlaylistsModule } from '@guesser/ui/playlists/playlists.module';
import { GuesserPageRoutingModule } from './guesser-page-routing.module';
import { GuesserPageComponent } from './guesser-page.component';
import { TracksListModule } from '@guesser/ui/tracks-list/tracks-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SearchForGuessModule } from '@guesser/ui/search-for-guess/search-for-guess.module';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    GuesserPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GuesserPageRoutingModule,
    DropdownModule,
    PlaylistsModule,
    TracksListModule,
    ButtonModule,
    SearchForGuessModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ],
  exports: [
    GuesserPageComponent
  ],
  providers: [
    MessageService
  ]
})
export class GuesserPageModule { }
