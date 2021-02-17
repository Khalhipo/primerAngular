import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';
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

  formImagen = this.fb.group({
    imagen:['',Validators.required]
  })

  inputBorrar: string = '';
  mostrarEditar: boolean = false;
  mostrarEliminar: boolean = false;
  mostrarEditarEliminar: boolean = false;
  perfil: User = {};
  mensajesUsuario: Mensaje[] = [];
  mensaje: string = '';
  constructor(private servicioMensajes: MensajesService, private servicioUsuario: UserService, private fb: FormBuilder, private irHacia: Router) { }

  

  ngOnInit(): void {
    this.cargarPerfil();
    this.obtenerMensajes();
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta);
        this.perfil = respuesta;
        if(this.perfil.imgSrc==null){
          this.perfil.imgSrc = "assets/images/foto_perfil.jpg";
        }
        this.formPerfil.patchValue(respuesta);
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  editarPerfil(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.cargarPerfil();
        this.mostrarEditar = false;
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  eliminarUsuario(): void {
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta);
        this.servicioUsuario.logOut();
        this.irHacia.navigate(['/login']);
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  cambiaImagen(evento): void {
    if(evento.target.files){
      console.log("datos" + evento.target.files[0]);
      this.formImagen.get('imagen').setValue(evento.target.files[0]);
    }
  }

  subirImagen(): void {
    const formData = new FormData()
    formData.append('imagen',this.formImagen.get('imagen').value);
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  //Subir foto con parámetro
  foto: File
  tengoFoto(evento): void {
    if(evento.target.files){
      console.log("datos" + evento.target.files[0]);
      this.foto = evento.target.files[0];
    }
  }

  subirFoto(): void {
    const formData = new FormData()
    formData.append('imagen',this.foto);
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  obtenerMensajes(): void {
    this.servicioMensajes.leerMensajes().subscribe(
      respuesta => {
        console.log(respuesta);
        this.mensajesUsuario = respuesta;
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }

  borrarMensaje(id: number): void {
    this.servicioMensajes.eliminarMensaje(id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerMensajes();
      },
      error => {console.log(error),
        this.mensaje = error.error.error
        }
    )
  }
}
