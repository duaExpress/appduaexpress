import { Component } from '@angular/core';

/**
 * Generated class for the IndicacionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'indicacion',
  templateUrl: 'indicacion.html'
})
export class IndicacionComponent {

  text: string;

  constructor() {
    console.log('Hello IndicacionComponent Component');
    this.text = 'Hello World';
  }

}
