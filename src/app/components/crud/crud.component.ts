import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Nota } from 'src/app/models/nota';
import { Note } from 'src/app/models/note';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  notaCreada: boolean = false;
  temporizador: any = null;
  busqueda: string = '';
  notas: Note[] = [];
  notaNueva: Note = new Note();
  formNuevo: FormGroup = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl("", Validators.required),
    contenido: new FormControl("", Validators.required),
  });

  constructor(private servicio: NotasService) { }

  ngOnInit(): void {
    this.obtenerNotas();
  }

  obtenerNotas(): void {
    this.servicio.leerNotas().subscribe(
      respuesta => {
        console.log(respuesta);
        this.notas = respuesta;
      },
      error => console.log(error)
    );
  }

  crearNota(entrada): void {
    this.servicio.insertarNota(entrada).subscribe(
      respuesta => {
      console.log(respuesta);
      this.formNuevo.reset();
      this.notaNueva = new Nota();
      this.obtenerNotas();
      this.notaCreada = true;
      setTimeout(() => {
        this.notaCreada = false;
      }, 2000);
    },
    error => console.log(error)
    );
  }

  eliminarNota(): void {
    this.servicio.borrarNota(this.formNuevo.value.id).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formNuevo.reset();
        this.obtenerNotas();
      },
      error => console.log(error)
    );
  }

  editarNota(): void {
    this.servicio.editarNota(this.formNuevo.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formNuevo.reset();
        this.obtenerNotas();
      },
      error => console.log(error)
    );
  }

  buscarNotas(): void {
    this.servicio.buscarNotas(this.busqueda).subscribe(
      respuesta => {
        console.log(respuesta);
        this.notas = respuesta;
      },
      error => console.log(error)
    );
  }

  buscarConRetraso(): void {
    if(this.temporizador==null){
      this.temporizador = setTimeout(()=>{this.buscarNotas();this.temporizador=null},3000)
    }
  }

}
