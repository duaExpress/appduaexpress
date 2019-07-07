import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Incidencia } from '../models/incidencia';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IncidenciaService{

  incidencia: AngularFirestoreDocument<any>;

  authUser: any;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

    public saveIncidencia(incidencia: Incidencia){

      const id = this.database.createId();

      this.database.doc(`incidencias/${id}`).set({
        id,
        origen: this.getValueFromString(incidencia.origen),
        abiertaPor: this.getValueFromString(incidencia.abiertaPor),
        nif: this.getValueFromString(incidencia.nif),
        comunicadoAduana: incidencia.comunicadoAduana,
        tratado: incidencia.tratado,
        incorporadoFicha: incidencia.incorporadoFicha,
        estado: this.getValueFromString(incidencia.estado),
        expedienteSancionador:this.getValueFromString(incidencia.expedienteSancionador),
        liquidacionesComplementarias: this.getValueFromString(incidencia.liquidacionesComplementarias),
        documentacionRelacionada: this.getValueFromString(incidencia.documentacionRelacionada),
        descripcion: this.getValueFromString(incidencia.descripcion)
      });
      return id;
    }

    public update(incidencia: Incidencia){

      this.database.doc(incidencia.id).update({
        origen: this.getValueFromString(incidencia.origen),
        abiertaPor: this.getValueFromString(incidencia.abiertaPor),
        nif: this.getValueFromString(incidencia.nif),
        comunicadoAduana: incidencia.comunicadoAduana,
        tratado: incidencia.tratado,
        incorporadoFicha: incidencia.incorporadoFicha,
        estado: this.getValueFromString(incidencia.estado),
        expedienteSancionador:this.getValueFromString(incidencia.expedienteSancionador),
        liquidacionesComplementarias: this.getValueFromString(incidencia.liquidacionesComplementarias),
        documentacionRelacionada: this.getValueFromString(incidencia.documentacionRelacionada),
        descripcion: this.getValueFromString(incidencia.descripcion)
      });
    }

    public getIncidencia(documentId: string): AngularFirestoreDocument<Incidencia>{
         //console.log('buscando: ' + documentId);
      return this.database.collection('incidencias').doc(documentId);
    }

    public deleteIncidencia(id: string){
      this.database.doc(id).delete();
    }

    public getIncidenciasExpediente(id):AngularFirestoreCollection<Incidencia>{
      return this.database.collection('incidencias', ref => ref.where('expedienteSancionador', '==', id))
    }

    public getIncidencias():AngularFirestoreCollection<Incidencia>{
      return this.database.collection(`incidencias`);
    }

    private getDateNow(){
      return this.datepipe.transform(new Date(), 'dd-MM-yyyy HH:mm:ss');
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


