import { Pipe, PipeTransform } from '@angular/core';
import { Listas } from '../../app/class';


@Pipe({
  name: 'pendientes',
  pure:false
})
export class PendientesPipe implements PipeTransform {

  transform(lists: Listas[],state:boolean=false) : Listas[] {
    return lists.filter((list) => list.completado === state);
  }
}
