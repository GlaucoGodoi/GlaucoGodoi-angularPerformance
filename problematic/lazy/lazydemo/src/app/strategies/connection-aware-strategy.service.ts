import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

export declare var navigator;

@Injectable({
  providedIn: 'root'
})
export class ConnectionAwareStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.hasGoodConnection()? fn() : EMPTY;
  }

  hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) { //Check if the user is not trying to save band
        return false; 
      }
      const avoidTheseConnections = ['slow-2g', '2g', '3g' /* , '3g', '4g' */];
      const effectiveType = conn.effectiveType || '';
      console.log(effectiveType);
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }

}
