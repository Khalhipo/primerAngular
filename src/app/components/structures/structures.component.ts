import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

  verdad: boolean = false;
  edad: number = 0;

  num1: number = 0;
  num2: number = 0;
  operador: string = "";
  operaciones: string[] = ["suma","resta","multiplicacion","division"];

  constructor() { }

  ngOnInit(): void {
  }

  muestraLog(numero, indice, cuenta): void {
    console.log("El " + numero + " tiene el índice: " + indice + " de un total de " + cuenta);
  }

}
