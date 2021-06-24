import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadSelectedStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data['loadMe'] ? fn() : EMPTY;
  }
}
