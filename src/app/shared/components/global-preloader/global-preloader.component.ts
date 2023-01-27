import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { GlobalPreloaderService } from '@shared/components/global-preloader/global-preloader.service';

@Component({
  selector: 'app-global-preloader',
  templateUrl: './global-preloader.component.html',
  styleUrls: ['./global-preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'justify-content-center align-items-center fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-white-alpha-50 z-5',
    '[class.flex]': 'isLoading === true',
    '[class.hidden]': 'isLoading === false'
  }
})
export class GlobalPreloaderComponent {
  isLoading = false;

  constructor(private globalPreloaderService: GlobalPreloaderService, changeDetectorRef: ChangeDetectorRef) {
    this.globalPreloaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;

      changeDetectorRef.markForCheck();
    });
  }
}
