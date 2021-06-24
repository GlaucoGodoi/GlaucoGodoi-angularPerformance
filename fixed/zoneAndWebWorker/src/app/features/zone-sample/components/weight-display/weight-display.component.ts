import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-display',
  template: `
    <div>
      <label>Current weight:</label>
      <label>{{weight}}</label>
    </div>
  `,
  styleUrls: ['./weight-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightDisplayComponent implements AfterViewChecked {

  @Input()
  public weight: number

  constructor() { }

  ngAfterViewChecked(): void {
    console.log('Change detection on WeightDisplay');
  }

}
