import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormBuilder } from '@angular/forms';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../services/expediente.services';
//import { Observable } from 'rxjs/Observable';
//import * as moment from 'moment';
//import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ExpedienteSubTipo } from '../../models/global.enum';



@Component({
  selector: 'entrega-documentacion',
  templateUrl: 'entrega-documentacion.html'
})
export class EntregaDocumentacionComponent {

  expedienteDocument: AngularFirestoreDocument<Expediente>;
  expediente: Expediente;
  dateFormat = 'DD/MM/YYYY';
  fechaCreacion: any;
  bsConfig: Partial<BsDatepickerConfig>;
  idExpediente : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder,
    public database: AngularFirestore,
    public expedienteService: ExpedienteService
  ) {
      this.idExpediente = this.navParams.get("idExpediente");
      console.log('Id exp:' + this.idExpediente);
      this.expediente = new Expediente();
      this.expediente.ExpedienteSubTipo=ExpedienteSubTipo.DocEntega;
      if(this.idExpediente != '0' ){
        this.expedienteDocument = this.expedienteService.getExpediente(this.idExpediente);
        this.expedienteDocument.valueChanges().subscribe(exp => {
            this.expediente= exp;
        })
      }

    }

    ionViewDidLoad() {
    }

    public editExpediente() {

      console.log('exp: ' + this.expediente);

      if(this.idExpediente == '0'){
        this.expedienteService.saveExpediente(this.expediente);
      }else{
        this.expedienteService.updateExpediente(this.expediente);
      }
      this.navCtrl.pop();
    }


}
