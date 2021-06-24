import { AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnDestroy } from '@angular/core';
import { memoize } from 'lodash-decorators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-zone-page',
  template: `
    <div class="holder">
      <div>
        <app-weight-display [weight]="weight|async"></app-weight-display>
      </div>
      <app-counter></app-counter>
    </div>
  `,
  styleUrls: ['./zone-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonePageComponent implements AfterViewInit, OnDestroy {

  public weight: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private interval: any;

  constructor(
    private zone: NgZone
  ) { }

  public ngAfterViewInit(): void {

    this.zone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        let temp = Math.random() * 237;
        if (Math.ceil(temp) % 2) {
          temp = 0;
        }        
        if (temp > 0) {
          this.updateWeight(temp);
        } else {
          this.weight.next(temp);
        }
      }, 500);
    });
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private updateWeight(weight: number): void {
    const newWeight = this.doComplexCalculation(weight);
    this.zone.run(() => {
      this.weight.next(newWeight);
    });
  }
  @memoize()
  private doComplexCalculation(value: number): number {
    const temp = (value * 34) / 22 + 8;
    console.log(temp);
    return temp;
  }
}
