import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { IncidenciaService } from '../../services/incidencia.service';
import { UserService } from '../../services/user.services';
import { Incidencia } from '../../models/incidencia';
import { ExpedienteSubTipo } from '../../models/global.enum';

/**
 * Generated class for the IncidenciaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'incidencia',
  templateUrl: 'incidencia.html'
})
export class IncidenciaComponent {

  incidencia: Incidencia;
  idExpediente : any;
  idIncidencia : any;
  localUser : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public incidenciaService: IncidenciaService,
    public userService: UserService
  ) {
    this.idExpediente = this.navParams.get("idExpediente");
    this.idIncidencia = this.navParams.get("idIncidencia");
    this.localUser = this.userService.getLocalUser();
    console.log('UID: ' + this.localUser.user.uid);

    if(this.idIncidencia != '0' ){
      this.incidenciaService.getIncidencia(this.idIncidencia).valueChanges().subscribe(inc => {
          this.incidencia= inc;
      })
    }

  }

}
