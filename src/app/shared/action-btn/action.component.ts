import {Component} from '@angular/core';


@Component({
  selector: 'cu-download-link-cell-renderer',
  template: `
    <div style="margin: 5px 0px 0px 6px;">

      <i
        class="fa fa-trash btn btn-sm btn-to-left"
        style="color: #e60000; cursor: pointer;"
        title="Delete"
        (click)="onDelete($event)"
        aria-hidden="true"
      ></i>
      <i
        class="fa fa-pencil btn btn-sm btn-to-left"
        style="margin-left:1px;color: #00CC00; cursor: pointer;"
        title="Edit"
        (click)="onEdit($event)"
        aria-hidden="true"
      ></i>
      <i
        class="fa fa-eye btn btn-sm btn-to-left"
        style="margin-left:1px; color: #0033FF; cursor: pointer;"
        title="View"
        (click)="onEdit($event)"
        aria-hidden="true"
      ></i>
      <i
        data-toggle="dropdown"
        class="fa fa-list btn btn-sm btn-to-left"
        style="margin-left:1px;cursor: pointer;"
        title="options"
        aria-hidden="true"
      ></i>
      <ul class="dropdown-menu">
        <li>Cancel</li>
        <li role="separator" class="divider"></li>
        <li (click)="onGenerate($event)">Generate PQ</li>
      </ul>
    </div>
  `,
})
export class ActionCellRendererComponent {
  DocumentTypeCollection: any;
  docs: any;
  params;
  label: string;
  disableButton = true;

  constructor() {
  }

  agInit(params): void {
    this.params = params;

    this.label = this.params.label || null;
  }

  onDelete($event) {
    if (this.params.onDelete instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        // ...something
      };
      console.log('onDelete');
      if (params.rowData.status === 'Proceed') {
        this.disableButton = false;
      }
      this.params.onDelete(params);
    }
  }

  onEdit($event) {
    if (this.params.onEdit instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        // ...something
      };
      this.params.onEdit(params);
    }
  }

  onGenerate($event) {
    if (this.params.onEdit instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        // ...something
      };
      this.params.onGenerate(params);
    }
  }

  Data() {
    console.log('LOL');
  }

}
