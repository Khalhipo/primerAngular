import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['',[Validators.required,Validators.minLength(6)]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]]
  })


  inputBorrar: string = '';
  mostrarEditar: boolean = false;
  mostrarEliminar: boolean = false;
  mostrarEditarEliminar: boolean = false;
  perfil: User = {};

  constructor(private servicioUsuario: UserService, private fb: FormBuilder, private irHacia: Router) { }

  

  ngOnInit(): void {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta);
        this.perfil = respuesta;
        this.formPerfil.patchValue(respuesta);
      },
      error => console.log(error) 
    )
  }

  editarPerfil(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.cargarPerfil();
        this.mostrarEditar = false;
      },
      error => console.log(error)
    )
  }

  eliminarUsuario(): void {
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta);
        this.servicioUsuario.logOut();
        this.irHacia.navigate(['/login']);
      },
      error => console.log(error)
    )
  }
}
