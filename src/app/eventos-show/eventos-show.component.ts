import { Component, OnInit } from '@angular/core';
import { EventosServiceService } from '../eventos-service.service';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})


export class EventosShowComponent implements OnInit {
  filtroBusqueda = '';
  eventos: IEvento[] = [];

  constructor( private eventosService: EventosServiceService)
  {

  }

  ordenarPorFecha(event: Event)
  {
    event.preventDefault();
    this.eventos.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
  }

  ordenarPorPrecio(event: Event)
  {
    event.preventDefault();
    this.eventos.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }

  eliminarEvento(e:IEvento)
  {
    this.eventosService.getEventos().subscribe( eventos => this.eventos = eventos);
  }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe( eventos => this.eventos = eventos);
  }

}
