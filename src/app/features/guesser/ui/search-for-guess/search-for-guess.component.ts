import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ObjectTypeEnum, SearchService, TrackInterface } from '@spotify-api';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-for-guess',
  templateUrl: './search-for-guess.component.html',
  styleUrls: ['./search-for-guess.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block'
  }
})
export class SearchForGuessComponent implements OnInit {
  @Output()
  selectTrack = new EventEmitter<TrackInterface>();

  searchInput = new FormControl();

  searchTracks$!: Observable<TrackInterface[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchTracks$ = this.searchInput.valueChanges
      .pipe(
        filter(Boolean),
        debounceTime(500),
        switchMap((query) => {
          return this.searchService.searchForItem(`${query}`, [ObjectTypeEnum.Track])
        }),
        map((searchResults) => searchResults.tracks?.items ?? []),
      );
  }

  onSelectTrack(track: TrackInterface): void {
    this.selectTrack.emit(track);
  }
}
