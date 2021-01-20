import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generate-lottery',
  templateUrl: './generate-lottery.component.html',
  styleUrls: ['./generate-lottery.component.css']
})
export class GenerateLotteryComponent implements OnInit {

  digito: number;

  @Input() entrada: number 
  @Input() objetoEntrada = {nombre: "", apellido: ""}; 

  constructor() { }

  ngOnInit(): void {
  }

  obtenAleatorio(): void {
    this.digito = Math.floor(Math.random() * 10);
  }

}
