import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./page.component";

const routes: Routes = [

  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
];


@NgModule({
  declarations: [PagesComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class PagesModule {
}



