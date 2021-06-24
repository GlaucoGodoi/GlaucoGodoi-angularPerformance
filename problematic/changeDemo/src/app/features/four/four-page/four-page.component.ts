import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../data/product';
import * as faker from 'faker/locale/pt_PT';

@Component({
  selector: 'app-four-page',
  template: `
    <div class="page-holder">
      <app-product-list [items]="list$.asObservable()" ></app-product-list>

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
export class FourPageComponent implements OnInit  {

  public items = new Array<Product>();
  public list$ = new BehaviorSubject(this.items);

  public ngOnInit(): void {
    for (let index = 0; index <=15; index++) {
      this.items.push({
        id: index, 
        name: faker.commerce.productName(), 
        price: faker.commerce.price(10.23, 99.11,2,'€')} as Product);
    }    
    this.list$.next(this.items);
  }

  public addProduct(): void{

      this.items.push({
        id:this.items.length +1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(10.31, 99.56,2,'€')
      } as Product)

      this.list$.next(this.items);

  }
  
}
