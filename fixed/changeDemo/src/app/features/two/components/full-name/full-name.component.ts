import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-name',
  template: `
    <p>
      <span class="identifier">full name</span>
      <app-first-name [firstName]="firstName"></app-first-name>   
      <app-last-name [lastName] = "lastName"></app-last-name>  
    </p>
    {{changeDetectionRunning()}}
  `,
  styles: [
    `
    p{
      background-color: salmon;
      padding:10px;
    }
   `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullNameComponent {

  @Input()
  public firstName: string;

  @Input() 
  public lastName: string;

  public changeDetectionRunning(): void {
    console.log('Change detection on FullName');
  }

}
