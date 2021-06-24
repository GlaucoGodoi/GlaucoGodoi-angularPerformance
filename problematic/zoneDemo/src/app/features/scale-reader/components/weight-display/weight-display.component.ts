import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weight-display',
  template: `
    <p>Weight (Kg)</p>
    <div>{{weight}}</div>
    {{changeDetectionRunning()}}
  `,
  styleUrls: ['./weight-display.component.scss']
})
export class WeightDisplayComponent {

  @Input()
  public set startReading(value: boolean) {
    if (value) {
      this.start();
    } else {
      this.end();
    }
  }

  @Output()
  public newBarcode: EventEmitter<number> = new EventEmitter<number>()

  public weight: number;
  public interval: number;

  constructor(
    private http: HttpClient
  ) { }

  private start(): void {
    this.interval = window.setInterval(() => {
      this.readScale();
    }, 300);
  }

  private end(): void {
    window.clearInterval(this.interval);
  }

  private async readScale(): Promise<void> {
    console.log('Scale invoked');
    const response = await this.http.get('assets/data.json').toPromise();

    let seed = Math.ceil(Math.random() * 100);

    if (seed % 2 === 0) {
      seed = 0;
    }

    seed = this.discountPackage(seed);

    if (seed >= 0) {
      this.weight = seed;
      this.newBarcode.emit(this.readBarcode());
    }
  }

  private discountPackage(weight: number): number {
    let counter = 0;
    for (let index = 0; index < 100000000; index++) {
      counter++;
    }
    return weight - 3.5;
  }

  private readBarcode(): number {
    return Math.ceil(Math.random() * 100000000);
  }

  public changeDetectionRunning(): void {
    console.log('Change detection Weight-Display');
  }

}
