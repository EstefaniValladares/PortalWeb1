import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips'
})
export class PipsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
