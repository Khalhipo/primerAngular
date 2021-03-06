import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.css']
})
export class FormClassComponent implements OnInit {

  user: User = new User();
  users: User[] = [];
  usuarioSel: User = null;


  constructor() { }

  ngOnInit(): void {
  }

  insertar(): void {
    this.users.push(this.user);
    this.user = new User();
    //Guardar datos en LocalStorage
    localStorage.setItem('backup',JSON.stringify(this.users));
  }

  addP(user): void {
    if(user.nombre!=""){
      this.usuarioSel = user;
    }
    
  }

  deshabilitar(): boolean {
    if(this.user.nombre==null || this.user.nombre=="" ){
      if(this.user.apellido==null || this.user.apellido==""){
        if(this.user.edad==null ||  isNaN(this.user.edad)){
          return true;
        }
      }
    }
    return false;
  }

}
