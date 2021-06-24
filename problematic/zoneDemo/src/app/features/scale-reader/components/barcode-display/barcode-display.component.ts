import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-display',
  template: `
    <p>Bale barcode</p>
    <div>{{barcode}}</div>
    {{runningChangeDetection()}}
  `,
  styleUrls: ['./barcode-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeDisplayComponent implements OnInit {

  @Input()
  public barcode: number;

  constructor() { }

  ngOnInit(): void {
  }

  public runningChangeDetection(): void{
    console.log('Change detection barcode-display');
  }

}
