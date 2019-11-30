import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Indicacion } from '../models/indicacion';
import { DatePipe } from '@angular/common';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndicacionService{

  indicacion: AngularFirestoreDocument<any>;

  authUser: any;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

    public saveIncidencia(indicacion: Indicacion){
      const id = this.database.createId();
      this.database.doc(`indicaciones/${id}`).set({
        id,
        texto: this.getValueFromString(indicacion.texto),
        idExpediente: this.getValueFromString(indicacion.idExpediente),
        fechaInMilis: this.getValueFromNumber(indicacion.fechaInMilis),
        usuario: this.getValueFromString(indicacion.usuario)
      });
      return id;
    }



    public getIndicacion(documentId: string): AngularFirestoreDocument<Indicacion>{
        return this.database.collection('indicaciones').doc(documentId);
    }

    public deleteIndicacion(id: string){
      this.database.collection('indicaciones').doc(id).delete();
    }

    public getIndicacionesExpediente(id):AngularFirestoreCollection<Indicacion>{
      return this.database.collection('indicaciones', ref => ref.where('idExpediente', '==', id))
    }

    public getIndicaciones():AngularFirestoreCollection<Indicacion>{
      return this.database.collection(`indicaciones`);
    }

    public getDateNow(){
      return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
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

    public getValueFromBoolean(value:boolean){
      if (value === undefined || value == null){
        return false;
      } else {
        return value;
      }
    }
}
