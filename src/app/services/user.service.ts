import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/auth/login/login.component';
import { accesoUsuario, User } from '../interfaces/user';

/*Esta para SEQUELIZE
const url = 'http://localhost:3000/user/';
*/
//Esta para php
const url = 'http://localhost/backendphp/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registrar(usuario: User): Observable<any> {
    return this.http.post(url,usuario);
  }
/*
SEQUALIZE
  acceso(usuario: accesoUsuario): Observable<any> {
    return this.http.post(url+'login', usuario);
  }
*/

//La de abajo para php
  acceso(usuario: accesoUsuario): Observable<any> {
    return this.http.post(url+'login/', usuario);
  }

  obtenerPerfil(): Observable<any> {
    return this.http.get(url);
  }

  editarPerfil(usuario: User): Observable<any> {
    return this.http.put(url,usuario);
  }

  eliminarUsuario(): Observable<any> {
    return this.http.delete(url);
  }

  listarUsuario(): Observable<any> {
    return this.http.get(url+'/listar');
  }

  //Solo para backend PHP
  subirImagen(entrada): Observable<any> {
    return this.http.post(url+'image/',entrada);
  }

  guardarToken(token: string): void {
    localStorage.setItem('userToken', token);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logOut(): void {
    localStorage.removeItem('userToken');
  }

  leerToken(): string {
    return localStorage.getItem('userToken'); 
  }



}
