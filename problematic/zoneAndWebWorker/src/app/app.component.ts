import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `   
   <div class="main-menu">
    <h2>Examples</h2>
    <a [routerLink]="[ '/zone']" routerLinkActive="active-route" >NgZone</a>
    <a [routerLink]="[ '/webworker']" routerLinkActive="active-route">Web worker</a>
   </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'zoneAndWebWorker';
}
