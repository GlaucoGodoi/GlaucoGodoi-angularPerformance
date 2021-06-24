import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'zone', loadChildren: ()=>import('./features/zone-sample/zone-sample.module').then(m=>m.ZoneSampleModule)},
  {path:'webworker', loadChildren: ()=>import('./features/ww-sample/ww-sample.module').then(m=>m.WwSampleModule)},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
