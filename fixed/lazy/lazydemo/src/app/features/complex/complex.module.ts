import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexRoutingModule } from './complex-routing.module';
import { ComplexPageComponent } from './complex-page/complex-page.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';


@NgModule({
  declarations: [
    ComplexPageComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    ComplexRoutingModule
  ]
})
export class ComplexModule { }
