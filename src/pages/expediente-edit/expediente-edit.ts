import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../services/expediente.services';
import { Observable } from 'rxjs/Observable';
import { ExpedientesPage } from '../expedientes/expedientes';
import * as moment from 'moment';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ExpedienteSubTipo } from '../../models/global.enum';
import { UserService } from '../../services/user.services';
import { User } from '../../models/user';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-expediente-edit',
  templateUrl: 'expediente-edit.html',
})
export class ExpedienteEditPage {

  expedienteDocument: AngularFirestoreDocument<Expediente>;
  expediente: Expediente;
  dateFormat = 'DD/MM/YYYY';
  fechaCreacion: any;
  bsConfig: Partial<BsDatepickerConfig>;
  idExpediente : any;
  tipo: any;
  authUser: any;
  user: Observable<User>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder,
    public database: AngularFirestore,
    public userService: UserService,
    public expedienteService: ExpedienteService
  ) {

    this.authUser = JSON.parse(window.localStorage.getItem('user'));

    console.log(' * User : ' + this.authUser.user.uid);
    //this.user = this.userService.getUserById(this.authUser.user.uid);

    this.user= this.userService.getUserObsById(this.authUser.user.uid);
    console.log(this.user);
    this.user.subscribe(usuario => {
      console.log(usuario);
    })




      this.idExpediente = this.navParams.get("idExpediente");
      this.tipo = this.navParams.get("tipo");
      this.expediente = new Expediente();
      this.expediente.ExpedienteSubTipo=this.tipo;

      if(this.idExpediente != '0' ){
        this.expedienteDocument = this.expedienteService.getExpediente(this.idExpediente);
        this.expedienteDocument.valueChanges().subscribe(exp => {
            this.expediente= exp;
        })
      }
    }

    isDae(){
      if(this.expediente.ExpedienteSubTipo==ExpedienteSubTipo.DAE){
        return true;
      }
      return false;
    }

    isAereoImport(){
      if(this.expediente.ExpedienteSubTipo==ExpedienteSubTipo.DespachoAereoImportacion){
        return true;
      }
      return false;
    }
    isDespachoAereo(){
      if(this.expediente.ExpedienteSubTipo==ExpedienteSubTipo.DespachoAereoExportacion){
        return true;
      }
      return false;
    }

    ionViewDidLoad() {}

    public close() {
      this.navCtrl.setRoot(ExpedientesPage);
    }
  }
