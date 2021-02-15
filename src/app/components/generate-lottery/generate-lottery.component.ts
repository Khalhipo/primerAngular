import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generate-lottery',
  templateUrl: './generate-lottery.component.html',
  styleUrls: ['./generate-lottery.component.css']
})
export class GenerateLotteryComponent implements OnInit {

  digito: number = undefined;

  @Input() entrada: number = null;
  @Input() objetoEntrada: {nombre:string, apellido:string}; 

  constructor() { }

  ngOnInit(): void {
  }

  obtenAleatorio(): void {
    this.digito = Math.floor(Math.random() * 10);
  }

}
