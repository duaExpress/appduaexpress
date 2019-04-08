import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FicheroCliente } from '../models/ficheroCliente';
import { DatePipe } from '@angular/common';


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
        urlDownload: this.getValueFromString(ficheroCliente.urlDownload)
      });
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
