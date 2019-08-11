import { Component } from '@angular/core';

/**
 * Generated class for the VerivalorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'verivalor',
  templateUrl: 'verivalor.html'
})
export class VerivalorComponent {

  text: string;

  constructor() {
    console.log('Hello VerivalorComponent Component');
    this.text = 'Hello World';
  }

}
