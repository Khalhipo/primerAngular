import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

// ESTE PARA SEQUELIZE const url = 'http://localhost:3000/notas/';

//El de abajo para PHP
const url = 'http://localhost/backendphp/notas/';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  

  constructor(private http: HttpClient) { }

  leerNotas(): Observable<any> {
    return this.http.get(url);
  }

  insertarNota(nota: Note): Observable<any> {
    return this.http.post(url,nota);
  }
  
  leerNota(id: number): Observable<any> {
    return this.http.get(url+id);
  }

  editarNota(nota: Note): Observable<any> {
    return this.http.put(url,nota);
  }
/*
Esta sería para SEQUELIZE
  borrarNota(id: number): Observable<any> {
    return this.http.delete(url+id);
  }
*/

//Esta para backendphp
  borrarNota(id: number): Observable<any> {
    return this.http.delete(url+'?id='+id);
  }

  buscarNotas(entrada: string): Observable<any> {
    return this.http.get(url + '?busqueda=' + entrada);
  }

}
