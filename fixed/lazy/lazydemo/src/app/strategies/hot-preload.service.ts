import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotPreloadService {

  private subject = new Subject<HotPreloadOptions>();
  state = this.subject.asObservable();

  startPreload(routePath: string) {
    const message = new HotPreloadOptions(routePath, true);
    this.subject.next(message);
  }
}

export class HotPreloadOptions {
  constructor(public routePath: string, public preload = true) { }
}