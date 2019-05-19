import { Component } from '@angular/core';

/**
 * Generated class for the IncidenciasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'incidencias',
  templateUrl: 'incidencias.html'
})
export class IncidenciasComponent {

  text: string;

  constructor() {
    console.log('Hello IncidenciasComponent Component');
    this.text = 'Hello World';
  }

}
