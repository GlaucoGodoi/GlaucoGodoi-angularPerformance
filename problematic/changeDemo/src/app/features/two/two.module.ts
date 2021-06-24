import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoPageComponent } from './two-page/two-page.component';
import { RouterModule } from '@angular/router';
import { FullNameComponent } from './components/full-name/full-name.component';
import { FirstNameComponent } from './components/first-name/first-name.component';
import { LastNameComponent } from './components/last-name/last-name.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TwoPageComponent,
    FullNameComponent,
    FirstNameComponent,
    LastNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component:TwoPageComponent}
    ])
  ]
})
export class TwoModule { }
