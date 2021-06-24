import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-scale-reader-page',
  template: `
    <div class="holder">
      <h1>Scale reader</h1>
      <div class="form-holder">
        <app-barcode-display [barcode]="currentBarcode|async"></app-barcode-display>
        <app-weight-display (newBarcode)="bubbleUpNewBarcode($event)" [startReading]="isRunning"></app-weight-display>
        <button [ngClass]="{'button-running': isRunning}" type="button" (click)="toggleReading()">{{isRunning?'Stop':'Start'}}</button>
      </div>
      
    </div>
  `,
  styleUrls: ['./scale-reader-page.component.scss']
})
export class ScaleReaderPageComponent {

  public isRunning: boolean = false;
  public currentBarcode: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  public toggleReading(): void {
    this.isRunning = !this.isRunning;

  }

  public bubbleUpNewBarcode(barcode: number): void{
    this.currentBarcode.next(barcode);
  }

}
