import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="menu-holder">
      <h1>Examples: </h1>
      <a [routerLink]="[ '/one' ]">One</a>
      <a [routerLink]="[ '/two' ]">Two</a>
      <a [routerLink]="[ '/three' ]">Three</a>
      <a [routerLink]="[ '/four' ]">Four</a>
    </div>
  
    <router-outlet class="content-holder"></router-outlet>
  `,
  styles: [
    `
    .menu-holder{
      background-color: rgba(0,100,100,0.8);
      padding: 1rem;
      box-shadow: 0 5px 5px grey;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      margin: 5px;
      border-radius: 3px;
    }
    h1{
      color:cornSilk;
    }
    a{
      color: cornSilk;
      text-decoration: inherit;
      border: 2px solid rgba(0,100,0,0.8);
      padding: 0.5rem;
      font-size: 1rem;
    }

    a:hover{
      border: 2px solid rgba(0,100,100,0.8);
      background-color:orange;
    }

    .content-holder{
      padding: 10px;
    }
    `
  ]
})
export class AppComponent {
  title = 'changeDemo';
}
