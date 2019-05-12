import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FicheroAdmin } from '../models/ficheroAdmin';
import { DatePipe } from '@angular/common';
import { ExpedienteSubTipo } from '../models/global.enum';


@Injectable()
export class FicherosAdminService{

  ficheroAdmin: AngularFirestoreDocument<any>;
  ficherosAdmin: AngularFirestoreCollection<any>;
  authUser: any;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

   public saveFichero(fileAdmin: FicheroAdmin){

      const id = this.database.createId();

      this.database.doc(`ficherosAdmin/${id}`).set({
        id,
        idExpediente:this.getValueFromString(fileAdmin.idExpediente),
        urlDownload: this.getValueFromString(fileAdmin.urlDownload),
        tipoFichero: this.getValueFromString(fileAdmin.tipoFichero),
        nombreFichero: this.getValueFromString(fileAdmin.nombreFichero)
      });
    }




    public deleteFicheroAdmin(id){
      this.database.doc(`ficherosAdmin/${id}`).delete();

    }

    private getDateNow(){
      return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
    }


    public getFicherosExpediente(id):AngularFirestoreCollection<FicheroAdmin>{
      return this.database.collection('ficherosAdmin', ref => ref.where('idExpediente', '==', id))
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
