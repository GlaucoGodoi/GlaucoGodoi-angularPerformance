import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../data/product';

@Component({
  selector: 'app-product-row',
  template: `
   <div class="line-holder">
    <span>{{product.id}}</span>
    <span>{{product.name}}</span>
    <span>{{product.price}}</span>
  </div>
  {{changeDetectionRunning()}}
  `,
  styles: [
    `
    .line-holder{
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      border-bottom: 1px solid grey;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductRowComponent {

  @Input()
  public product: Product;

  public changeDetectionRunning():void{
    console.log("Change detection on ProductRow");
  }

}
