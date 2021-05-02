import { Pipe, PipeTransform } from '@angular/core';
import {IEvento} from '../interfaces/i-evento';

@Pipe({
  name: 'eventoFilter'
})
export class EventoFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], filterBy: string): IEvento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filter) {
    return eventos
      .filter(evento => evento.title.toLocaleLowerCase().includes(filter))
    }
    return eventos;

  }

}
