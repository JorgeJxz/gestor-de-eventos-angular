import { EventosServiceService } from './../eventos-service.service';
import { Component, OnInit, Output,  } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { ComponentDeactivate } from '../interfaces/component-deactivate';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit, ComponentDeactivate {
  @Output() datosEvento = new EventEmitter<IEvento>();
  ev_creado : boolean = false;

  newEvento: IEvento = {"id":0,"title":"","image":"","date":"","description":"","price":0};

  constructor(private eventosService: EventosServiceService) { }

  ngOnInit(): void {
  }

  canDeactivate()
  {
    if(!this.ev_creado)
    {
      return confirm('¿Quieres abandonarla página?. Los cambios no se guardarán.');
    }
    else
    {
      return true;
    }
  }

  addEvento()
  {
    this.eventosService.addEvento(this.newEvento).subscribe(
      evento => {
      this.datosEvento.emit(evento);
      this.newEvento = {"id":0,"title":"","image":"","date":"","description":"","price":0};
      }
      );
  }

  changeImage(fileInput: HTMLInputElement)
  {
      if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }
}
