import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: string = "texto de prueba";
  num1: number = 0;
  num2: number = 0;
  letras: string[] = ["a","b","c"];
  usuarios = [
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "Dúrcal"},
    {nombre: "Antonio", apellido: "Molina"}
  ];

  usuarioSeleccionado:  {nombre: "", apellido: ""} = null;

  selUser(usuario): void{
    this.usuarioSeleccionado = usuario;
  }

  constructor() { }

  ngOnInit(): void {
  }



}
