import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { RankCalculatorPipe } from './pipes/rank-calculator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent,
    RankCalculatorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
