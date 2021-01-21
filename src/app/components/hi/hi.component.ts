import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.paramMap.get("nombre");
    this.apellidos = this.rutaActiva.snapshot.paramMap.get("apellidos");
  }

}
