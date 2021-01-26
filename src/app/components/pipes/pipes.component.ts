import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  usuario: string = "pepe luis dominguez";
  mes: string = "ENERO";
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis.";
  fecha: Date = new Date();
  dinero: number = 12.40;
  numero_pi: number = Math.PI;
  preposiciones: string[] = ['a','ante','bajo','cabe','con','contra','de','desde']; 
  usuarios = [
    {nombre: "Javier", apellido: "As", edad: 22},
    {nombre: "Jose", apellido: "López", edad: 23},
    {nombre: "María", apellido: "Palacio", edad: 45}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
