import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}$`;
  }

}
