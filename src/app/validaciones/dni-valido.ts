import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl):{[key:string]:any} | null => {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const numero = dni.value.match(/\d+/g);
        let letra = dni.value.match(/[a-z]/gi);
        const letra_eval = letras[numero%23];
        if(letra==null) {
            return {dni: "Falta letra"};
        } else {
            letra = letra.join().toUpperCase();
        }
        if(letra_eval != letra) {
            return {dni: "inválido"};
        }
        return null;

    }
}