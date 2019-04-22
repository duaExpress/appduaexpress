import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FicheroCliente } from '../models/ficheroCliente';
import { DatePipe } from '@angular/common';
import { ExpedienteSubTipo } from '../models/global.enum';


@Injectable()
export class FicherosClienteService{

  ficheroCliente: AngularFirestoreDocument<any>;
  ficherosCliente: AngularFirestoreCollection<any>;
  authUser: any;


  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
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
      this.ficherosCliente.doc(id).delete();
    }

    private getDateNow(){
      return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    }


   public getFicheros():AngularFirestoreCollection<FicheroCliente>{
    return this.database.collection('ficherosCliente');
   }

    public getFicherosExpediente(id):AngularFirestoreCollection<FicheroCliente>{
      return this.database.collection('ficherosCliente', ref => ref.where('idExpediente', '==', id))
    }

    private getValueFromString(value:string){
      if (value === undefined || value == null){
        return '';
      } else {
        return value;
      }
    }

    private getValueFromNumber(value:number){
      if (value === undefined || value == null){
        return '';
      } else {
        return value;
      }
    }


}
