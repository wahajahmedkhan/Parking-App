import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-http-loader></ng-http-loader>
    <router-outlet></router-outlet>`
})
export class AppComponent {

}
