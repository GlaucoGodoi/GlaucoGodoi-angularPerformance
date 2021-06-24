import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourPageComponent } from './four-page/four-page.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DoOtherStuffComponent } from './components/do-other-stuff/do-other-stuff.component';
import { ProductRowComponent } from './components/product-row/product-row.component';



@NgModule({
  declarations: [
    FourPageComponent,
    ProductListComponent,
    DoOtherStuffComponent,
    ProductRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component: FourPageComponent}
    ])
  ]
})
export class FourModule { }
