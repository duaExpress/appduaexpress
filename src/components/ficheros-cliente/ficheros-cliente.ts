import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

/**
 * Generated class for the FicherosClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ficheros-cliente',
  templateUrl: 'ficheros-cliente.html'
})
export class FicherosClienteComponent {

  text: string;

  constructor(private afStorage: AngularFireStorage) { }
  upload(event) {
    this.afStorage.upload('/upload/ficheros', event.target.files[0]);
  }

}
