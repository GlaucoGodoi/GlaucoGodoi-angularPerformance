import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonePageComponent } from './ww-page/zone-page.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CounterComponent } from './counter/counter.component';
import { CodeGeneratorPipe } from './pipes/code-generator.pipe';



@NgModule({
  declarations: [
    ZonePageComponent,
    ListComponent,
    CounterComponent,
    CodeGeneratorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', component: ZonePageComponent}
      ]
    )
  ]
})
export class WwSampleModule { }
