import { Component } from '@angular/core';
import {   AngularFireStorage } from 'angularfire2/storage';
//import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

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

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  upload(event) {

    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = '/upload/' + id;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     ).subscribe()

  }

}
