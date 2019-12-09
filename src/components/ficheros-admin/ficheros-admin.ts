
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

//import { FormBuilder } from '@angular/forms';
//import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { FicherosAdminService } from '../../services/ficherosAdmin.service';
import { UserService } from '../../services/user.services';
import { FicheroAdmin } from '../../models/ficheroAdmin';
//import { ExpedienteSubTipo } from '../../models/global.enum';

/**
 * Generated class for the FicherosClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ficheros-admin',
  templateUrl: 'ficheros-admin.html'
})
export class FicherosAdminComponent {

  ficherosAdmin: Observable<FicheroAdmin[]>;
  uploadPercent: Observable<number>;
  downloadURL= new Observable<string>();
  idExpediente : any;
  localUser : any;
  ficheroAdmin : FicheroAdmin;
  tiposFichero : string[];
  tipoFicheroSel: string;

  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
      edit: false,
      class: 'align-center',
    },
    columns: {
      tipoFichero: {
        title: 'Tipo',
        width: '30%',
        class: 'align-center',
      },
      urlDownload: {
        title: 'Fichero',
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
    public afStorage:  AngularFireStorage,
    public ficherosService: FicherosAdminService,
    public userService: UserService
  ) {
      this.idExpediente = this.navParams.get("idExpediente");
      this.localUser = this.userService.getLocalUser();
      console.log('UID: ' + this.localUser.user.uid);
      this.ficherosAdmin=this.ficherosService.getFicherosFromExpediente(this.idExpediente);
  }

  upload(event) {

    this.ficheroAdmin= new FicheroAdmin();
    this.ficheroAdmin.idExpediente= this.idExpediente;
    this.ficheroAdmin.tipoFichero= this.tipoFicheroSel;

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
          console.log('ruta: ' + urlObs  );
          if(this.ficheroAdmin.urlDownload == undefined || this.ficheroAdmin.urlDownload==''){
              this.ficheroAdmin.nombreFichero = file.name;
              this.ficheroAdmin.urlDownload = filePath;
              this.ficherosService.saveFichero(this.ficheroAdmin);
              //console.log('guardado');
            }
        })
        )
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
      this.ficherosService.deleteFicheroAdmin(event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
