import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexPageComponent } from './complex-page/complex-page.component';

const routes: Routes = [
  {path:'', component: ComplexPageComponent, children:[
    {path:'', loadChildren:()=>import('../other/other.module').then(m=>m.OtherModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexRoutingModule { }
