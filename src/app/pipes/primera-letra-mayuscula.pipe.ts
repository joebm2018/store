import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'primeraLetraMayuscula'
})
export class PrimeraLetraMayusculaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    const nuevoTexto:string=value.charAt(0).toUpperCase()+value.slice(1);
    return nuevoTexto;
  }

}
