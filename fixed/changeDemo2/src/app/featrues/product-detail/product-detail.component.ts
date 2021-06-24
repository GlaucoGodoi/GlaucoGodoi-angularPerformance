import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/product';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="main-holder">
      <h2>Product detail</h2>

      <div class="detail-holder" >
        <div class="group-holder">
          <span>Id</span>
          <label>{{productDetail?.id}}</label>
        </div>

        <div class="group-holder">
          <span>Name</span>
          <label>{{productDetail?.name}}</label>
        </div>

        <div class="group-holder">
          <span>Price</span>
          <label class="price">{{productDetail?.price}}</label>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  @Input()
  public productDetail: Product


}
