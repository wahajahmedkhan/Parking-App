import {Component} from '@angular/core';

@Component({
  selector: "xu-download-link-cell-renderer",
  template: `
    <div style="margin: auto;">
      <button
        style="
      font-size: 0.8rem;;
      height: 22px;
      margin-top: -8px;
      margin-left: -15px;"
        class="btn btn-primary"
        title="Add Details"
        (click)="onShow($event)"
        aria-hidden="true">Add More Details
      </button>
  `,
  styles: [
      `.btn {
      line-height: 0;
    }`
  ]

})

export class AddDetailsCellRendererComponent {
  params;
  label: string;

  constructor() {
  }

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  onShow($event) {
    console.log('abc', this.params);
    if (this.params.onShow instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      };
      this.params.onShow(params);
    }
  }
}
