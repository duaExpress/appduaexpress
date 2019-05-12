import { Component } from '@angular/core';

/**
 * Generated class for the FicherosAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ficheros-admin',
  templateUrl: 'ficheros-admin.html'
})
export class FicherosAdminComponent {

  text: string;

  constructor() {
    console.log('Hello FicherosAdminComponent Component');
    this.text = 'Hello World';
  }

}
