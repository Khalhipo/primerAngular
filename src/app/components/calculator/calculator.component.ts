import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num_entrada: number;

  constructor(private irHacia: Router) { }

  ngOnInit(): void {
  }

  navegarHacia(entrada): void{
    this.irHacia.navigate(['/multiply/'+ entrada]);
  }

}
