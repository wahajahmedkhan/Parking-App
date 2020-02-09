import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {NgbdSortableHeader, SortEvent} from "@shared/sortable.directive";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  active = 1;

  service = {};


  constructor() {
  }


  ngOnInit() {
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

  }

}
