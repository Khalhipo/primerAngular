import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { GenerateLotteryComponent } from './components/generate-lottery/generate-lottery.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { HiComponent } from './components/hi/hi.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NumsPipe } from './pipes/nums.pipe';
import { DniPipe } from './pipes/dni.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    LotteryComponent,
    GenerateLotteryComponent,
    CalculatorComponent,
    MultiplyComponent,
    HiComponent,
    PipesComponent,
    NumsPipe,
    DniPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
