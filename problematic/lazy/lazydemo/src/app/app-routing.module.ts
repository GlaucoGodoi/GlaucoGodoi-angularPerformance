import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexPageComponent } from './features/complex/complex-page/complex-page.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { OtherPageComponent } from './features/other/other-page/other-page.component';
import { SimpleComponent } from './features/simple/simple.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'simple', component:SimpleComponent},
  { path: 'complex', component: ComplexPageComponent, children:[
    { path: '', component: OtherPageComponent}
  ]},  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
