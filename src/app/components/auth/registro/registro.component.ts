import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  mensaje: string = '';

  formRegister = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]],
    dni:['', [Validators.required, dniValido()]]
  })
  constructor(private fb: FormBuilder, private servicioUsuario: UserService, private irHacia: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    if(this.formRegister.value.password == this.formRegister.value.password2){
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.servicioUsuario.guardarToken(respuesta);
          this.irHacia.navigate(['/perfil']);
        },
        error => {
          console.log(error)
          this.mensaje = error.error.error
        }
      );
    }
    else alert("Las contraseñas no coinciden");
  }

  get nombre1(){
    return this.formRegister.get("nombre");
  }
  get apellidos1(){
    return this.formRegister.get("apellidos");
  }
  get password1(){
    return this.formRegister.get("password");
  }
  get email1(){
    return this.formRegister.get("email");
  }
  get dni1(){
    return this.formRegister.get("dni");
  }
  get telefono1(){
    return this.formRegister.get("telefono");
  }

}
