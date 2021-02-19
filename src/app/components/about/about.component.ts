import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  dni: number;

  constructor(private irHacia: Router) { }

  ngOnInit(): void {
  }

  navegarHacia(): void {
    this.irHacia.navigate(['/hi/'+ this.nombre + '/' + this.apellidos]);
  }

}
