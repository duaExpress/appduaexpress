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
import { IncidenciaComponent } from '../../components/incidencia/incidencia';

@Component({
  selector: 'incidencias',
  templateUrl: 'incidencias.html'
})
export class IncidenciasComponent {


  incidencias: Observable<Incidencia[]>;
  idExpediente : any;
  localUser : any;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
      edit: false,
      class: 'align-center',
    },
    columns: {
      id: {
        title: 'Id',
        class: 'align-center',
      },
        origen: {
        title: 'Origen',
        class: 'align-center',
      },
        abiertaPor: {
        title: 'Abierta por',
        class: 'align-center',
      },
      tratado: {
        title: 'Tratado',
        class: 'align-center',
      },
      estado: {
        title: 'Estado',
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
    public incidenciaService: IncidenciaService,
    public userService: UserService
  ) {
      this.idExpediente = this.navParams.get("idExpediente");
      this.localUser = this.userService.getLocalUser();
      console.log('UID: ' + this.localUser.user.uid);
      this.incidencias = this.incidenciaService.getIncidenciasExpediente(this.idExpediente).valueChanges();
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

  deleteIncidencia(event){
    if (window.confirm('¿Estas seguro que quieres borrar la incidencia seleccionada?')) {
      this.incidenciaService.deleteIncidencia(event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  public newIncidencia(event) {

    this.navCtrl.push(IncidenciaComponent,{idExpediente: this.idExpediente});

  }

}

