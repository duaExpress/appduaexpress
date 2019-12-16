import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FicheroCliente } from '../models/ficheroCliente';
import { DatePipe } from '@angular/common';
import { Observable, noop } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExpedienteSubTipo } from '../models/global.enum';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class FicherosClienteService{

  ficheroCliente: AngularFirestoreDocument<any>;
  ficherosCliente: AngularFirestoreCollection<any>;
  authUser: any;

  constructor(
    public database: AngularFirestore,
    public datepipe: DatePipe,
    public afStorage: AngularFireStorage)  {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

   public saveFichero(ficheroCliente: FicheroCliente){
      const id = this.database.createId();
      this.database.doc(`ficherosCliente/${id}`).set({
        id,
        idExpediente:this.getValueFromString(ficheroCliente.idExpediente),
        uidCliente: this.getValueFromString(ficheroCliente.uidCliente),
        urlDownload: this.getValueFromString(ficheroCliente.urlDownload),
        tipoFichero: this.getValueFromString(ficheroCliente.tipoFichero),
        nombreFichero: this.getValueFromString(ficheroCliente.nombreFichero)
      });
    }

    public getTiposFicheros(tipoExpediente){
      let list : any;
      switch (tipoExpediente) {
        case ExpedienteSubTipo.DespachoAereoImportacion:
            list = ['Factura Comercial', 'Packing List', 'Otros Documentos'];
            break;
        case ExpedienteSubTipo.DespachoAereoExportacion:
           list = ['Conocimiento aéreo', 'Factura Comercial', 'Packing List', 'Autorización de Despacho', 'Etiquetas',
            'Documento CITES', 'Certificado de Sanidad', 'Certificado de Sanidad Animal', 'Certificado de Farmacia',
            'Documento DAE', 'Otros Documentos'];
           break;
        case ExpedienteSubTipo.DocEntega:
            list = ['Conocimiento aéreo ', 'Etiquetas', 'Otros Documentos'];
            break;
        case ExpedienteSubTipo.DAE:
            list = ['Factura Comercial', 'Etiquetas', 'Documento DAE'];
            break;
        default:
            console.log('invalid');
      }
      return list;
    }

    public deleteFicheroCliente(id){
      this.database.doc(`ficherosCliente/${id}`).delete();
    }

    public getDateNow(){
      return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    }

    public getFicheros():AngularFirestoreCollection<FicheroCliente>{
      return this.database.collection('ficherosCliente');
    }

    public getFicherosExpediente(id):AngularFirestoreCollection<FicheroCliente>{
      return this.database.collection('ficherosCliente', ref => ref.where('idExpediente', '==', id))
    }

    public getFicherosFromExpediente(id): Observable<FicheroCliente[]> {
      let filesAdmin = this.getFicherosExpediente(id);
      return filesAdmin.snapshotChanges().pipe(
        map(changes => {
          return changes.map(doc => {
            const fichero: FicheroCliente = doc.payload.doc.data();
            const fileRef = this.afStorage.ref(fichero.urlDownload);
            fileRef.getDownloadURL().subscribe((url) => {
              fichero.urlDownload = url;
            });
            return fichero;
          })
        })
      );
    }



    public getValueFromString(value:string){
      if (value === undefined || value == null){
        return '';
      } else {
        return value;
      }
    }

    public getValueFromNumber(value:number){
      if (value === undefined || value == null){
        return '';
      } else {
        return value;
      }
    }


}
