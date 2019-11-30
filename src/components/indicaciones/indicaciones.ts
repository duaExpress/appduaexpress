import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
//import { finalize } from 'rxjs/operators';
import { IncidenciaService } from '../../services/incidencia.service';
import { IndicacionService } from '../../services/indicacion.service';
import { UserService } from '../../services/user.services';
import { Incidencia } from '../../models/incidencia';
import { Indicacion } from '../../models/indicacion';
import { IndicacionComponent } from '../indicacion/indicacion';


@Component({
  selector: 'indicaciones',
  templateUrl: 'indicaciones.html'
})
export class IndicacionesComponent {

  indicaciones: Observable<Indicacion[]>;
  idExpediente : any;
  localUser : any;
  bodyText: string;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
      class: 'align-center',
    },
    columns: {
      id: {
        title: 'Id',
        class: 'align-center',
      },
        fecha: {
        title: 'Fecha',
        class: 'align-center',
      },
        texto: {
        title: 'Observación',
        class: 'align-center',
      },
      usuario: {
        title: 'usuario',
        class: 'align-center',
      }
    },
    delete :{
      confirmDelete: true,
      deleteButtonContent: '<center class="icon-trash">Borrar</center>',
      cancelButtonContent: '<center class="icon-close">Cancelar</center>'
    },
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: '',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public indicacionService: IndicacionService,
    public userService: UserService
  ) {
      this.idExpediente = this.navParams.get("idExpediente");
      this.localUser = this.userService.getLocalUser();
      this.indicaciones = this.indicacionService.getIndicacionesExpediente(this.idExpediente).valueChanges();
  }

  upload(event) {
    if(this.idExpediente != undefined && this.idExpediente != '0'){
      return true;
    }
  }

  tieneNumExpediente(){
    if(this.idExpediente != undefined && this.idExpediente != '0'){
      return true;
    }
    return false;
  }

  deleteIndicacion(event){
    if (window.confirm('¿Estas seguro que quieres borrar la indicacion seleccionada?')) {
      this.indicacionService.deleteIndicacion(event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  public editIndicacion(event) {
    this.navCtrl.push(IndicacionComponent,{id: event.data.id});
  }

  public newIndicacion(event) {

    this.navCtrl.push(IndicacionComponent,{idExpediente: this.idExpediente});

  }

}
