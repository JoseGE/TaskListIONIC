import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CPlaceholderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cPlaceholder',
})
export class CPlaceholderPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, defecto:string): string {
    return (value)?value:defecto;
  }
}
