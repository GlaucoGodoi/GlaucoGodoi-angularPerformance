import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOnePageComponent } from './component-one-page/component-one-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentOnePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component: ComponentOnePageComponent}
    ])
  ]
})
export class ComponentOneModule { }
