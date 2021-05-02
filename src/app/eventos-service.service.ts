import { Injectable } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';
import { IEvento } from './interfaces/i-evento';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventosResponse, EventoResponse } from './interfaces/responses';


@Injectable({
  providedIn: 'root'
})
export class EventosServiceService {

  constructor(private http: HttpClient) { }

  getEvento(id: number): Observable<IEvento> {
    return this.http.get<EventoResponse>(`/eventos/${id}`).pipe(
      map(resp => resp.evento)
    );
  }

  getEventos(): Observable<IEvento[]> {
    return this.http.get<EventosResponse>(`/eventos`).pipe(
    map(resp => resp.eventos)
    );
  }

  addEvento(evento: IEvento): Observable<IEvento> {
    return this.http.post<EventoResponse>(`/eventos`, evento).pipe(
    map(resp => resp.evento)
    );
  }

  deleteEvento(id: number): Observable<void> {
    return this.http.delete<void>(`/eventos/${id}`);
  }




}
