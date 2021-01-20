import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { GenerateLotteryComponent } from './components/generate-lottery/generate-lottery.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MultiplyComponent } from './components/multiply/multiply.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    LotteryComponent,
    GenerateLotteryComponent,
    CalculatorComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
