import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
//import { Observable } from 'rxjs/Observable';
//import { finalize } from 'rxjs/operators';
import { IncidenciaService } from '../../services/incidencia.service';
import { UserService } from '../../services/user.services';
import { Incidencia } from '../../models/incidencia';
//import { ExpedienteSubTipo } from '../../models/global.enum';
//import { IncidenciasComponent } from '../../components/incidencias/incidencias';

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

  incidenciaDocument: AngularFirestoreDocument<Incidencia>;
  incidencia= new Incidencia();
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

    if(this.idIncidencia != '0' && this.idIncidencia != undefined){
      this.incidenciaDocument = this.incidenciaService.getIncidencia(this.idIncidencia);
      this.incidenciaDocument.valueChanges().subscribe(inc => {
          this.incidencia= inc;
      })
    }else{

      this.idIncidencia=0;
      this.incidencia.expedienteSancionador = this.idExpediente;
      this.incidencia.origen='Operador';
      this.incidencia.comunicadoAduana='NO';
      this.incidencia.tratado='NO';
      this.incidencia.incorporadoFicha='NO';
      this.incidencia.estado='Abierta';
    }

  }


  editIncidencia(){

    if(this.idIncidencia == '0'){

      this.idExpediente= this.incidenciaService.saveIncidencia(this.incidencia);

    }else{

       this.incidenciaService.update(this.incidencia);

    }

    this.navCtrl.pop();
  }

}
