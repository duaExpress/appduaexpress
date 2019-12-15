import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Expediente } from '../../models/expediente';
import { ExpedienteVerificacion } from '../../models/expedienteVerificacion';
import { VerificacionService } from '../../services/verificacion.services';
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

  idExpediente: string;
  expedienteDocument: AngularFirestoreDocument<Expediente>;
  verificacionDocument: AngularFirestoreDocument<ExpedienteVerificacion>;
  expediente: Expediente;
  expVerificacion= new ExpedienteVerificacion();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public verificacionService: VerificacionService
  ) {

    this.expVerificacion.id='0';

    this.idExpediente = this.navParams.get("idExpediente");
      if(this.idExpediente != '0' ){
        this.verificacionDocument = this.verificacionService.getVerificacion(this.idExpediente);
        this.verificacionDocument.valueChanges().subscribe(exp => {
          if(exp != undefined){
            this.expVerificacion= exp;
          }
        })
     }

  }

  guardar(){

    if(this.expVerificacion.id != '0' ){
      this.verificacionService.update(this.expVerificacion);
    }else{
      this.expVerificacion.id = this.idExpediente;
      this.verificacionService.saveVerificacion(this.expVerificacion);
    }

  }

}
