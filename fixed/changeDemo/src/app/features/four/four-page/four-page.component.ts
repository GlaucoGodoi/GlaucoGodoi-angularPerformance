import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../data/product';
import * as faker from 'faker/locale/pt_PT';

@Component({
  selector: 'app-four-page',
  template: `
    <div class="page-holder">
      <app-product-list [items]="list$" ></app-product-list>

      <button type="button" (click)="addProduct()">Add a product</button>
      
      <app-do-other-stuff></app-do-other-stuff>

    </div>
  `,
  styles: [
    `
    .page-holder{      
      width:600px;
      height: 600px;
      margin: 20px auto 20px auto;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
   
    button{
      font-size: 1rem;
      padding: 0.8rem;
      border: none;
      box-shadow: 0 5px 5px grey;
      margin: 20px 0;
    }

    button:active{
      box-shadow: none;
    }

    `
  ]
})
export class FourPageComponent implements OnInit {

  public items = new Array<Product>();
  public list$: Observable<Product[]>; //= new BehaviorSubject(this.items);

  public ngOnInit(): void {
    for (let index = 0; index <= 15; index++) {
      this.items.push({
        id: index, name: faker.commerce.productName(),
        price: faker.commerce.price(10, 99, 1, '€')
      } as Product);
    }
    this.list$ = of(this.items);
  }

  public addProduct(): void {
    const tempItem = {
      id: this.items.length + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(10, 99, 1, '€')
    } as Product;


    this.list$ = of(this.items).pipe(
      map(l => {
        l.push(tempItem);
        return l;
      })
    );
  }

}
