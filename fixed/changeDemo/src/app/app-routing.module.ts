import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'one', loadChildren:()=>import('./features/one/one.module').then(m=>m.OneModule)},
  {path:'two', loadChildren:()=>import('./features/two/two.module').then(m=>m.TwoModule)},
  {path:'three', loadChildren:()=>import('./features/three/three.module').then(m=>m.ThreeModule)},
  {path:'four', loadChildren:()=>import('./features/four/four.module').then(m=>m.FourModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
