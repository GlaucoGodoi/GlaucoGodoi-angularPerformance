import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreePageComponent } from './three-page/three-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThreePageComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'', pathMatch:'full', component: ThreePageComponent}
    ])
  ]
})
export class ThreeModule { }
