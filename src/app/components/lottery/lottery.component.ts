import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {

  objetoEntrada = {nombre: "Borrasca", apellido: "Filomena"};

  constructor() { }

  ngOnInit(): void {
  }

}
