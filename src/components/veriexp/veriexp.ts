import { Component } from '@angular/core';

/**
 * Generated class for the VeriexpComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'veriexp',
  templateUrl: 'veriexp.html'
})
export class VeriexpComponent {

  text: string;

  constructor() {
    console.log('Hello VeriexpComponent Component');
    this.text = 'Hello World';
  }

}
