import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MultiplyComponent } from './components/multiply/multiply.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "lottery", component:LotteryComponent},
  {path: "calculator", component:CalculatorComponent},
  {path: "multiply/:factor", component:MultiplyComponent},
  {path: "**", component:HomeComponent}  // AQUÍ LE PONEMOS POR DEFECTO EL HOME SI LA PÁGINA NO EXISTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
