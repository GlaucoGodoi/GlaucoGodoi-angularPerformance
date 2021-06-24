import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnePageComponent } from './one-page/one-page.component';
import { HailUserComponent } from './components/hail-user/hail-user.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    OnePageComponent,
    HailUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full' , component: OnePageComponent}
    ])
  ]
})
export class OneModule { }
