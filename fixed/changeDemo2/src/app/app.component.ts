import { Component } from '@angular/core';
import { DataSourceService } from './services/data-source.service';

@Component({
  selector: 'app-root',
  template: `    
    <div>
    <app-product-list></app-product-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'changeDemo2';

  constructor(svc: DataSourceService){
    svc.loadProducts();
    
  }

}
