import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nums'
})
export class NumsPipe implements PipeTransform {

  numeros: string[] = ["cero", "uno","dos","tres","cuatro","cinco","seis","siete", "ocho","nueve"];

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0]=="cuadrado"){
      return value*value;
    } else if(args[0]=="raiz"){
      return Math.sqrt(value);
    } else if(args[0]=="aletras" && value < 10){
      return this.numeros[value];
    }
    else {
      return null;
    }
    
  }

}
