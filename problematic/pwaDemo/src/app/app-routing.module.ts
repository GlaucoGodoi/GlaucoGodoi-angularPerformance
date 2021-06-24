import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'one', loadChildren: ()=>import('./features/component-one/component-one.module').then(m=>m.ComponentOneModule)},
  {path:'two', loadChildren: ()=>import('./features/component-two/component-two.module').then(m=>m.ComponentTwoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
