import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonePageComponent } from './zone-page/zone-page.component';
import { RouterModule } from '@angular/router';
import { WeightDisplayComponent } from './components/weight-display/weight-display.component';



@NgModule({
  declarations: [
    ZonePageComponent,
    WeightDisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component: ZonePageComponent}
    ])
  ]
})
export class ZoneSampleModule { }
