import { Injectable, NgZone } from '@angular/core';
import { Product } from '../data/product';
import * as faker from 'faker/locale/pt_PT';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {


  public readonly products = new Array<Product>()

  public set selectedProduct(product: Product){
    this.currentProduct = product;
    this.productToUse.next(product);    
  }

  public get selectedProduct(): Product{
    return this.currentProduct;
  }

  public productToUse: Subject<Product> = new Subject<Product>();

  private currentProduct: Product;

  public loadProducts(): void{
    for (let index = 0; index < 11; index++) {
      const tempProduct = {
        id: index,
        name: faker.commerce.productName(),
        price: faker.commerce.price(10,100, 2, '€')
      } as Product;

      this.products.push(tempProduct);
    }
  }
  
}
