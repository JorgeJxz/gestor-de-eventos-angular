import { UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface ComponentDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree> |
  Promise<boolean | UrlTree>;
}
