import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {
  transform(value: any, maxlen: number): any {
    return (!maxlen || !value || value.length < maxlen || value.length < 4) ?
      value : (value.substr(0, maxlen - 3) + '...');
  }
}

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (value??"").length > 1 ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : value;
  }
}

export const PIPES_CADENAS = [ElipsisPipe, CapitalizePipe,  ];
