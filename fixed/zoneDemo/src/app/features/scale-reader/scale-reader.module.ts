import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleReaderPageComponent } from './scale-reader-page/scale-reader-page.component';
import { RouterModule } from '@angular/router';
import { WeightDisplayComponent } from './components/weight-display/weight-display.component';
import { BarcodeDisplayComponent } from './components/barcode-display/barcode-display.component';



@NgModule({
  declarations: [
    ScaleReaderPageComponent,
    WeightDisplayComponent,
    BarcodeDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch:'full', component: ScaleReaderPageComponent}
    ])
  ]
})
export class ScaleReaderModule { }
