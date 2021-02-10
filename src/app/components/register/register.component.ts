import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValido } from 'src/app/validaciones/dni-valido';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    dni: new FormControl('',[Validators.required, dniValido()]),
    telefono: new FormControl(undefined,[Validators.required, telefonoValido(), Validators.pattern(/^\d{9}$/)])
  });

  //Formulario con FormBuilder
  formRegister2 = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(4)]],
    apellidos: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    email: ['',[Validators.required, Validators.email]],
    dni: ['',[Validators.required]],
    telefono: [undefined,[Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  evaluaForm(): void {
    console.log("Evaluando Formulario");
    console.log(this.formRegister.getRawValue());
    if(this.formRegister.valid){
      console.log("Formulario correcto");
    } else {
      console.log("Lo que has introducido es incorrecto");
    }
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
