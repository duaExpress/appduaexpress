import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      edit: false,
      class: 'align-center',
      custom: [{
        name: 'download',
        title: '<center><span class="icon-cloud-download"><span class="padding-left-35">Descargar</span></span></center>'
      }],
    },
    columns: {
      tipoFichero: {
        title: 'Tipo',
        width: '25%',
        class: 'align-center',
      },
      nombreFichero: {
        title: 'Fichero',
        width: '60%',
        class: 'align-center',
      }
    },
    delete :{
      confirmDelete: true,
      deleteButtonContent: '<center><span class="icon-trash"><span class="padding-left-35">Borrar</span></span></center>',
      cancelButtonContent: '<center><span class="icon-close"><span class="padding-left-35">Cancelar</span></span></center>'
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
      this.ficherosCliente = this.ficherosService.getFicherosFromExpediente(this.idExpediente);
  }

  upload(event) {
    this.ficheroCliente= new FicheroCliente();
    this.ficheroCliente.idExpediente = this.idExpediente;
    this.ficheroCliente.uidCliente =this.localUser.user.uid;
    this.ficheroCliente.tipoFichero = this.tipoFicheroSel;

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
          if (this.ficheroCliente.urlDownload == undefined || this.ficheroCliente.urlDownload == ''){
            this.ficheroCliente.nombreFichero = file.name;
            this.ficheroCliente.urlDownload = filePath;
            this.ficherosService.saveFichero(this.ficheroCliente);
          }
        }))
     ).subscribe()
  }

  tieneNumExpediente(){
    if(this.idExpediente != undefined && this.idExpediente != '0'){
      return true;
    }
    return false;
  }

  deleteFichero(event){
    if (window.confirm('¿Estas seguro que quieres borrar el fichero seleccionado?')) {
      this.ficherosService.deleteFicheroCliente(event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onFilesClientCustom(event) {
    let  win = window.open(event.data.urlDownload,'_blank');
    win.focus();
  }

}
