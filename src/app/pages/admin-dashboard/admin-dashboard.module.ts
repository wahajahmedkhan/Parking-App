import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard.component";
import {NgbNavModule, NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  }

];


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminDashboardModule {
}
