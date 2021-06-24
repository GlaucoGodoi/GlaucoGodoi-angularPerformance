import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Current value: {{counter}}
    </p>
    <p>
      <button type="button" (click)="advanceCounter()">Increase counter</button>
    </p>
  `,
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent{

  public counter: number = 0;

  public advanceCounter(): void{
    this.counter++;
  }

}
