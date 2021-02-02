import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { GenerateLotteryComponent } from './components/generate-lottery/generate-lottery.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { HiComponent } from './components/hi/hi.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NumsPipe } from './pipes/nums.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { StructuresComponent } from './components/structures/structures.component';
import { FormClassComponent } from './components/form-class/form-class.component';
import { CrudLocalComponent } from './components/crud-local/crud-local.component';
import { RegisterComponent } from './components/register/register.component';
import { CrudComponent } from './components/crud/crud.component';

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
    DniPipe,
    StructuresComponent,
    FormClassComponent,
    CrudLocalComponent,
    RegisterComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
