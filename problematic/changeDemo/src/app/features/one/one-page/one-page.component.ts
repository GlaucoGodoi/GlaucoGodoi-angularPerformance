import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-page',
  template: `
  <div>
    <p>
      <app-hail-user [username]="name"></app-hail-user>      
    </p>

    <p>
      <button type="button" (click)="emptyClick()">Do nothing</button>
      <button type="button" (click)="runTimer()">Run timer</button>
      <button type="button" (click)="loadData()">Load data</button>
      <button type="button" (click)="setName()">Set a name</button>
    </p>
  </div>
  `,
  styles: [
    `
    div{
      padding: 10px;
    }

    p{
      display:flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }

    button{
      font-size:1rem;
      padding: 0.8rem;
      border-radius: 5px;
      border: 1px solid grey;
      box-shadow: 0 5px 5px grey;
    }

    button:active{
      box-shadow: none;
    }
    `
  ]
})
export class OnePageComponent {

  public name: string;

  constructor(private httpClient: HttpClient){

  }

  public emptyClick(): void {

  }

  public runTimer(): void{
    setTimeout(()=>{console.log('Timeout!!!')},3000);
  }

  public async loadData(): Promise<void>{
    const response = await this.httpClient.get('assets/data.json').toPromise();
    console.log('Data read', response);
  }

  public setName(): void{
    this.name = 'Alberto Zapata';
  }

}
