import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe',
  standalone: true
})
export class PricePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}$`;
  }

}
