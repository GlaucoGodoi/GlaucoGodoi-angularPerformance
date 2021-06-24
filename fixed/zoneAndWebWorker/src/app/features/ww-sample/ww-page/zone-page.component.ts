import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Product } from '../data/product';
import * as faker from 'faker/locale/pt_PT';
import { BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-zone-page',
  template: `
    <section>
      <div class="list-holder">
        <app-list [items]="list$ | async"></app-list>
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
export class ZonePageComponent implements OnDestroy {

  public currentItems: Product[];

  public list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  private worker: Worker;

  public ngOnDestroy(): void {
    if (this.worker) {
      this.worker.terminate();
    }
  }


  public reload(): void {
    this.fillItems();
  }

  private fillItems(): void {
    console.clear();
    this.worker = new Worker('../../../workers/code-worker.worker', { type: 'module' });
    this.worker.onmessage = (message) => { this.addItemToList(message.data as Product) };

    this.currentItems = new Array<Product>();

    for (let index = 1; index <= 10; index++) {

      const tempProduct = {
        id: index, name: faker.commerce.productName()
      } as Product;

      this.worker.postMessage(tempProduct);
    }

  }

  private addItemToList(product: Product): void {    
    this.currentItems = [...this.currentItems];
    this.currentItems.push(product);
    this.list$.next(this.currentItems);
  }

}
