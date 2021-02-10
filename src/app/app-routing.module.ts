import { NgModule, Pipe } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { HiComponent } from './components/hi/hi.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { StructuresComponent } from './components/structures/structures.component';
import { FormClassComponent } from './components/form-class/form-class.component';
import { CrudLocalComponent } from './components/crud-local/crud-local.component';
import { RegisterComponent } from './components/register/register.component';
import { CrudComponent } from './components/crud/crud.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PerfilComponent } from './components/auth/perfil/perfil.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { UserRouterGuard } from './auth/user-router.guard';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "lottery", component:LotteryComponent},
  {path: "calculator", component:CalculatorComponent},
  {path: "multiply/:factor", component:MultiplyComponent},
  {path: "hi/:nombre/:apellidos", component:HiComponent},
  {path: "pipes", component:PipesComponent},
  {path: "structures", component:StructuresComponent},
  {path: "form", component:FormClassComponent},
  {path: "crudLocal", component:CrudLocalComponent},
  {path: "crud", component:CrudComponent},
  {path: "registro", component:RegistroComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "**", component:HomeComponent}  // AQUÍ LE PONEMOS POR DEFECTO EL HOME SI LA PÁGINA NO EXISTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
