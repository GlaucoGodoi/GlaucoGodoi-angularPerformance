import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hail-user',
  template: `
    <h1>Hello {{username}} !</h1>
    {{changeDetectionRunning()}}
  `,
  styles: [
    `
    h1{
      width:100%;
      text-align: center;
      background-color: rgb(155, 255, 224);
      padding:2rem;
      margin-bottom: 20px;
    }
    `
  ]
})
export class HailUserComponent {

  @Input()
  public username: string;
  
  public changeDetectionRunning(): void{
    console.log('Checking the view');
    
  }
  
}
