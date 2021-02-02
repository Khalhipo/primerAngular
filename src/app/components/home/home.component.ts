import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string = "Texto de prueba...";
  num1: number = 0;
  num2: number = 0;
  letras: string[] = ["a","b","c"];
  usuarios = [
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "Dúrcal"},
    {nombre: "Antonio", apellido: "Molina"}
  ];

  usuarios2: User[] = [
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "Dúrcal"},
    {nombre: "Antonio", apellido: "Molina"}
  ];

  usuario3: User = new User("Javier","B");

  usuarioSeleccionado:  {nombre: "", apellido: ""} = null;

  selUser(usuario): void{
    this.usuarioSeleccionado = usuario;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    alert("Sayonara, Baby");
  }



}
