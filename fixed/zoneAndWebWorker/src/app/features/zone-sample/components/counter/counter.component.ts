import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <section>
        <label>Current counter: {{counter}}</label>        
        <button type="button" (click)="increaseCounter()">Increase counter</button>
      </section>
  `,
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements AfterViewChecked {

  public counter: number = 0;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('Change detection on Counter');
    
  }

  
  public increaseCounter(): void {
    this.counter++;
  }

}
