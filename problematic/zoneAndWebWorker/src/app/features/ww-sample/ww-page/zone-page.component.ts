import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Product } from '../data/product';
import * as faker from 'faker/locale/pt_PT';

@Component({
  selector: 'app-zone-page',
  template: `
    <section>
      <div class="list-holder">
        <app-list [items]="currentItems"></app-list>
        <button type="button" (click)="reload()">Reload</button>
      </div>
      <div class="counter-holder">
        <app-counter></app-counter>
      </div>
    </section>
  `,
  styleUrls: ['./zone-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonePageComponent {

  public currentItems : Product[];

  constructor() { }


  public reload(): void{
    this.fillItems();
  }

  private fillItems(): void{
    this.currentItems = new Array<Product>();

    for (let index = 0; index <= 10; index++) {
      this.currentItems.push({
        id: index, name: faker.commerce.productName()        
      } as Product)  
      
    }
  }
}
