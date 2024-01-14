import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSinUnderscore'
})
export class StringSinUnderscorePipe implements PipeTransform {

  transform(any: string): any {
    return any.replaceAll("_", " ");
  }

}
