import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../data/product';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="list-holder">
      <ul>

      <li>
          <div class="line-holder">
            <h3>ID</h3>
            <h3>Name</h3>
            <h3>Price</h3>
          </div>
        </li>

        <li *ngFor="let product of items|async; trackBy: trackByMethod">
          <app-product-row [product]="product"></app-product-row>
        </li>
      </ul>
    </div>{{changeDetectionRunning()}}
  `,
  styles: [
    `
    .list-holder{
      border: 2px solid grey;
      padding: 0.5rem;
      width: 500px;
      box-shadow: 0 10px 10px grey;
    }

    .line-holder{
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      border-bottom: 1px solid grey;
    }

    ul{
      list-style-type: none;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  
  @Input()
  public items: Observable<Product[]>

  ngOnInit(): void {
    // this.items.subscribe((l:Product[])=>{
    //   this._items = l;
    // });
  }

  public changeDetectionRunning(): void {
    console.log('Change detection on ProductList');
        
  }

  public trackByMethod(index: number, item: Product): number{
    return item.id;
  }

}
