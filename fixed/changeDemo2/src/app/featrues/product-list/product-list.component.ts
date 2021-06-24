import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { Product } from 'src/app/data/product';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="main-holder">
      <div class="holder">
        <h2>Product list</h2>
        <ul>
          <li *ngFor="let item of svc.products; trackBy:trackByMethod" (click)="selectMe(item)">
            <div>{{item.name}}</div>
        </li>
        </ul>
      </div>
      <app-product-detail [productDetail]="svc.selectedProduct"></app-product-detail>
      <!-- <app-product-detail [productDetail]="svc.productToUse|async"></app-product-detail> -->
    </div>
  `,
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  constructor(
    public svc: DataSourceService,
    private cdRef: ChangeDetectorRef
  ) {    

  }

  public selectMe(item: Product) {
    this.svc.selectedProduct = item;
    //this.cdRef.markForCheck();
    //this.cdRef.detectChanges();
  }

  public trackByMethod(index: number, item: Product): number {
    return item.id;
  }

}
