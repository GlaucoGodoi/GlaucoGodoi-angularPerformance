import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTwoPageComponent } from './component-two-page/component-two-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentTwoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component: ComponentTwoPageComponent}
    ])
  ]
})
export class ComponentTwoModule { }
