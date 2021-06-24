import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-page',
  template: `
  <div>
    <span class="identifier">Page</span>
    <p>
      <label for="rootFirstName">First name</label>
      <input autocomplete="off" id="rootFirstName" type="text" [(ngModel)]="firstName">
    </p>
    <p>
      <label for="rootLastName">Last name</label>
      <input autocomplete="off" id="rootLastName" type="text" [(ngModel)]="lastName">
    </p>

    <p>
      <button type="button" (click)="doNothing()">Do nothing</button>      
    </p>

    <p>
      <app-full-name [firstName]="firstName" [lastName]="lastName"></app-full-name>
    </p>
  </div>
  `,
  styles: [
    `
    div{
      background-color:lightgrey;
    }
    p{
      margin: 5px 0 5px 0;
    }

    label{
      margin-left:10px
    }

    button{
      font-size:1rem;
      border: none;
      padding: 0.3rem;
      margin: 10px;
      background-color: darkorange;
      color: white;
      box-shadow: 0 5px 5px grey;
    }

    button:active{
      box-shadow: none;
    }
    `
  ]
})
export class TwoPageComponent {

  public firstName: string = "Abelardo";
  public lastName: string = "Barbosa";

  public doNothing(): void{}
}
