import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-name',
  template: `  
    <p>
      <label for="firstName">First name</label>
      <input autocomplete="off" id=firstName type="text" [(ngModel)]="firstName">
      {{changeDetectionRunning()}}
    </p>
  `,
  styles: [
    `
    p{
      background-color: lightgreen;
      margin:20px;
      padding: 1rem;
      position:relative;
    }

    label{ margin-right: 10px;}

    `
  ]
})
export class FirstNameComponent {

  @Input()
  public firstName: string;

  @Input()
  public lastName: string;

  public changeDetectionRunning(): void {
    console.log('Change detection on FirstName');
    
  }

}
