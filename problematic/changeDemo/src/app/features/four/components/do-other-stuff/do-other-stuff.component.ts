import { Component } from '@angular/core';

@Component({
  selector: 'app-do-other-stuff',
  template: `
    <p>
      <button type="button" (click)="doOtherStuff()">Do other action</button>
    </p>
  `,
  styles: [
    `
    button{
      font-size: 1rem;
      padding: 0.8rem;
      border: none;
      box-shadow: 0 5px 5px grey;
    }

    button:active{
      box-shadow: none;
    }
    `
  ]
})
export class DoOtherStuffComponent {

  public doOtherStuff(): void{}

}
