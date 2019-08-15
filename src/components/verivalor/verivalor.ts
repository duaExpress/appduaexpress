import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { Expediente } from '../../models/expediente';
import { ExpedienteVerificacion } from '../../models/expedienteVerificacion';
import { ExpedienteService } from '../../services/expediente.services';

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

  idExpediente: string;
  expedienteDocument: AngularFirestoreDocument<Expediente>;
  expediente: Expediente;
  expVerificacion= new ExpedienteVerificacion();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public expedienteService: ExpedienteService
  ) {

    this.idExpediente = this.navParams.get("idExpediente");
      if(this.idExpediente != '0' ){
        this.expedienteDocument = this.expedienteService.getExpediente(this.idExpediente);
        this.expedienteDocument.valueChanges().subscribe(exp => {
            this.expediente= exp;
        })
     }

  }


}
