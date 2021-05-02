import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentDeactivate } from '../interfaces/component-deactivate';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<ComponentDeactivate> {
  canDeactivate(
    component: ComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean |
    UrlTree> {
    return component.canDeactivate ? component.canDeactivate() : true;
    }

}
