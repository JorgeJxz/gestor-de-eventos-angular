import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventoFilterPipe } from './pipes/evento-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { Route, RouterModule } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { LeavePageGuard } from './guards/leave-page.guard';
import { EventDetailResolve } from './resolvers/event-detail.service';


const ROUTES: Route[] = [
  { path: "eventos", component: EventosShowComponent },
  { path: "eventos/add", component: EventoAddComponent,
          canDeactivate: [LeavePageGuard],
  },
  { path: "eventos/:id", component: EventDetailComponent,
    resolve: {evento: EventDetailResolve}
  },
  { path: "**", pathMatch: "full", redirectTo: "/eventos" }
];


export const APP_ROUTES = RouterModule.forRoot(ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventoFilterPipe,
    EventoItemComponent,
    EventoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
                useClass: BaseUrlInterceptor,
                multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
