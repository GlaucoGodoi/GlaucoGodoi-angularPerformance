import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HotPreloadOptions, HotPreloadService } from './hot-preload.service';

@Injectable({
  providedIn: 'root',
  deps: [HotPreloadService]
})
export class StepAheadStrategyService implements PreloadingStrategy {

  private hotPreloader$: Observable<HotPreloadOptions>;

  constructor(private hotService: HotPreloadService) {
    this.hotPreloader$ = this.hotService.state;
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.hotPreloader$.pipe(
      mergeMap(preloadOptions => {
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        return shouldPreload ? fn() : EMPTY;
      })
    );
  }

  private preloadCheck(route: Route, preloadOptions: HotPreloadOptions) {
    return (
      route.data &&
      route.data['loadMe'] &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    );
  }

}


