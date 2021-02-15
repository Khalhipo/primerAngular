import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Coche } from 'src/app/models/coche';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {

  editar: boolean = false;
  notaNueva: Nota = new Nota();
  notas: Nota[] = [];
  indice: number = -1;
  notaSel: Nota = new Nota();

  //Coches
  coches: Coche[] = [];
  cocheNuevo: Coche = new Coche();
  indice_coche: number = 1;
  cocheSel: Coche = new Coche();

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudLocal') != null) {
      this.notas = JSON.parse(localStorage.getItem('crudLocal'));
      this.indice = this.notas[this.notas.length - 1].id + 1;
    } else {
      this.indice = 1;
    }

    //Coche ngOnInit()
    if (localStorage.getItem('crudCoches') != null) {
      this.coches = JSON.parse(localStorage.getItem('crudCoches'));
      this.indice_coche = this.coches[this.coches.length - 1].id + 1;
    } else {
      this.indice_coche = 1;
    }
  }

  insertarNota(): void {
    this.notaNueva.id = this.indice;
    this.indice++;
    this.notas.push(this.notaNueva);
    this.notaNueva = new Nota();
    localStorage.setItem('crudLocal', JSON.stringify(this.notas));
  }

  insertarCoche(): void {
    this.cocheNuevo.id = this.indice_coche;
    this.indice_coche++;
    this.coches.push(this.cocheNuevo);
    this.cocheNuevo = new Coche();
    localStorage.setItem('crudCoches', JSON.stringify(this.coches));
  }

  editarNota(): void {
    for (let i in this.notas) {
      if (this.notas[i].id == this.notaSel.id) {
        this.notas[i] = this.notaSel;
        this.notaSel = new Nota();
        localStorage.setItem('crudLocal', JSON.stringify(this.notas));
      }
    }
  }

  editarCoche(): void {
    for(let i in this.coches){
      if(this.coches[i].id==this.cocheSel.id){
        this.coches[i] = this.cocheSel;
        this.cocheSel = new Coche();
        localStorage.setItem('crudCoches', JSON.stringify(this.coches));
      }
    }
  }

  eliminarNota(): void {
    if (confirm("Quieres eliminar la nota" + this.notaSel.titulo +"?")) {
      for (let i in this.notas) {
        if (this.notas[i].id == this.notaSel.id) {
          this.notas.splice(parseInt(i), 1);
          this.notaSel = new Nota();
          localStorage.setItem('crudLocal', JSON.stringify(this.notas));
        }
      }
    }
  }

  eliminarCoche(): void {
    if(confirm("Quieres eliminar el coche: " + this.cocheSel.marca + "?")){
      for(let i in this.coches){
        if(this.coches[i].id==this.cocheSel.id){
          this.coches.splice(parseInt(i),1);
          this.cocheSel = new Coche();
          localStorage.setItem('crudCoches',JSON.stringify(this.coches));
        }
      }
    }
  }

}
