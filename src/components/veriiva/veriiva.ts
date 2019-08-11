import { Component } from '@angular/core';

/**
 * Generated class for the VeriivaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'veriiva',
  templateUrl: 'veriiva.html'
})
export class VeriivaComponent {

  text: string;

  constructor() {
    console.log('Hello VeriivaComponent Component');
    this.text = 'Hello World';
  }

}
