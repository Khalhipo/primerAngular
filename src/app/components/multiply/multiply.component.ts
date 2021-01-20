import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  factor: number;
  tabla: number[] = [];

  constructor(private rutaActiva: ActivatedRoute, private irHacia:Router) {
  }

  ngOnInit(): void {
    this.factor = parseInt(this.rutaActiva.snapshot.paramMap.get("factor"));
    if(!isNaN(this.factor)){
      for(let index = 1; index<11; index++){
        this.tabla.push(this.factor*index);
      }
    }
  }

  volverAcalculadora(): void {
    this.irHacia.navigate(['/calculator']);
  }

}
