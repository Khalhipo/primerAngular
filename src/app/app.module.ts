import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
import { LoginComponent } from './components/auth/login/login.component';
import { PerfilComponent } from './components/auth/perfil/perfil.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';

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
    CrudComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  {provide:LOCALE_ID, useValue:"es"}, 
  {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
