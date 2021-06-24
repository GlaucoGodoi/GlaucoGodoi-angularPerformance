import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplexPageComponent } from './features/complex/complex-page/complex-page.component';
import { LeftComponent } from './features/complex/components/left/left.component';
import { RightComponent } from './features/complex/components/right/right.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { SimpleComponent } from './features/simple/simple.component';
import { OtherPageComponent } from './features/other/other-page/other-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SimpleComponent,
    ComplexPageComponent,
    LeftComponent, 
    RightComponent, OtherPageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
