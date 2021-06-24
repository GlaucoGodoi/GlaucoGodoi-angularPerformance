import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { LoadSelectedStrategyService } from './strategies/load-selected-strategy.service';
import { StepAheadStrategyService } from './strategies/step-ahead-strategy.service';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'simple', loadChildren:()=>import('./features/simple/simple.module').then(m=>m.SimpleModule), data:{loadMe:true}},
  { path: 'complex', loadChildren:()=>import('./features/complex/complex.module').then(m=>m.ComplexModule)}
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: StepAheadStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
