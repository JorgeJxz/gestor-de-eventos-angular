import { EventosServiceService } from './../eventos-service.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { IEvento } from '../interfaces/i-evento';



@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit
{
  @Input() evento: IEvento;
  @Output() eliminarCarta = new EventEmitter<IEvento>();

  constructor(private eventosService: EventosServiceService) { }

  ngOnInit()
  {

  }

  deleteEvento() {
      this.eventosService.deleteEvento(this.evento.id).subscribe(
      () => this.eliminarCarta.emit(),
      error => console.error(error)
      );
    }
}
