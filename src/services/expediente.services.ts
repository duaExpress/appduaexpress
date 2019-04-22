import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Expediente } from '../models/expediente';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpedienteService{

  expediente: AngularFirestoreDocument<any>;
  expedientes: AngularFirestoreCollection<any>;
  authUser: any;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
      this.expedientes = this.getExpedientes();
    }

    public saveExpediente(expediente: Expediente){

      const id = this.database.createId();

      this.database.doc(`expedientes/${id}`).set({
        id,
        numExpediente:this.getValueFromString(expediente.numExpediente),
        referencia: this.getValueFromString(expediente.referencia),
        numConocimiento: this.getValueFromString(expediente.numConocimiento),
        empresa: this.getValueFromString(expediente.empresa),
        partida: this.getValueFromString(expediente.partida),
        fechaVuelo: this.getValueFromString(expediente.fechaVuelo),
        peso: this.getValueFromNumber(expediente.peso),
        fecha:this.getDateNow()
      });
      return id;
    }

    public updateExpediente(expediente: Expediente){

      this.expedientes.doc(expediente.id).update({
        numExpediente:this.getValueFromString(expediente.numExpediente),
        referencia: this.getValueFromString(expediente.referencia),
        numConocimiento: this.getValueFromString(expediente.numConocimiento),
        empresa: this.getValueFromString(expediente.empresa),
        partida: this.getValueFromString(expediente.partida),
        fechaVuelo:this.getValueFromString(expediente.fechaVuelo),
        peso: this.getValueFromNumber(expediente.peso)
      });
    }

    public deleteExpediente(id){
      this.expedientes.doc(id).delete();
    }

    public getExpediente(documentId: string): AngularFirestoreDocument<Expediente>{

      /*filterBy(categoriaToFilter: string) {s
        this.avisos = this.afs.collection('avisos', ref => ref.where('categoria','==', categoriaToFilter )).valueChanges()

        return this.avisos;
      };*/

      console.log('buscando: ' + documentId);
      return this.database.collection('expedientes').doc(documentId);
    }

    public getExpedientes():AngularFirestoreCollection<Expediente>{
      return this.database.collection(`expedientes`);
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
