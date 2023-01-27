import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalPreloaderService {
  private readonly _isLoading$ = new BehaviorSubject<boolean>(false);

  isLoading$ = this._isLoading$.asObservable();

  constructor() { }

  setIsLoading(isLoading: boolean): void {
    this._isLoading$.next(isLoading);
  }
}
