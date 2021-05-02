import { IEvento } from './../interfaces/i-evento';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosServiceService } from '../eventos-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() evento: IEvento;

  constructor(private route: ActivatedRoute, private EventosService: EventosServiceService,private router: Router) { }

  ngOnInit(): void {
    this.evento = this.route.snapshot.data.evento;
    this.EventosService.getEvento(this.evento.id).subscribe(
    e => this.evento = e,
    error => console.error(error)
    );
  }

  goBack()
  {
    this.router.navigate(['/eventos']);
  }

}
