import { IEvento } from './../interfaces/i-evento';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EventosServiceService } from '../eventos-service.service';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventDetailResolve implements Resolve<IEvento>{

  constructor(
    private EventosService: EventosServiceService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<IEvento>
    {
      const id = +route.params.id;
      return this.EventosService.getEvento(id).pipe(
      catchError(e =>
      {
        this.router.navigate(['/eventos']);
        return of(null);
      })
      );
    }
}
