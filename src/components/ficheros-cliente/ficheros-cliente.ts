import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { FicherosClienteService } from '../../services/ficherosCliente.service';
import { UserService } from '../../services/user.services';
import { FicheroCliente } from '../../models/ficheroCliente';
import { ExpedienteSubTipo } from '../../models/global.enum';

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

  ficherosCliente: Observable<FicheroCliente[]>;
  uploadPercent: Observable<number>;
  downloadURL= new Observable<string>();
  idExpediente : any;
  localUser : any;
  ficheroCliente : FicheroCliente;
  tiposFichero : string[];
  tipoFicheroSel: string;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
      class: 'align-center',
    },
    columns: {
      tipoFichero: {
        title: 'Tipo',
        width: '30%',
        class: 'align-center',
      },
      urlDownload: {
        title: 'Descargar',
        width: '70%',
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
    public ficherosService: FicherosClienteService,
    public userService: UserService
  ) {
      this.idExpediente = this.navParams.get("idExpediente");
      this.localUser = this.userService.getLocalUser();
      console.log('UID: ' + this.localUser.user.uid);
      this.tiposFichero = this.ficherosService.getTiposFicheros(ExpedienteSubTipo.DespachoAereoExportacion);
      this.ficherosCliente = this.ficherosService.getFicherosExpediente(this.idExpediente).valueChanges();
  }


  upload(event) {

    this.ficheroCliente= new FicheroCliente();
    this.ficheroCliente.idExpediente= this.idExpediente;
    this.ficheroCliente.uidCliente=this.localUser.user.uid;
    console.log('Tipo ' + this.tipoFicheroSel);
    this.ficheroCliente.tipoFichero= this.tipoFicheroSel;


    const id = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = '/upload/' + id;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => (this.downloadURL = fileRef.getDownloadURL()).subscribe((urlObs) => {
          if(this.ficheroCliente.urlDownload == undefined || this.ficheroCliente.urlDownload==''){
              this.ficheroCliente.urlDownload = filePath;
              this.ficherosService.saveFichero(this.ficheroCliente);
              console.log('guardado');
            }
        })
        )
     ).subscribe()
  }

}
