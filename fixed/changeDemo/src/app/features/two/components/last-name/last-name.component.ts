import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  template: `  
    <p>
      <label for="lastName">Last name</label>
      <input autocomplete="off" id="lastName" type="text" [(ngModel)]="lastName">
    </p>
    {{changeDetectionRunning()}}
  `,
  styles: [
    `
    p{
      background-color: lightblue;
      margin:20px;
      padding: 1rem;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastNameComponent {
  
  @Input()
  public lastName: string;

  public changeDetectionRunning(): void {
    console.log('Change detection on LastName');
  }

}
