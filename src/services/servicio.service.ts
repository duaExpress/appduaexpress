import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Servicios } from '../models/servicios';

@Injectable()
export class ServicioService{
  incidencia: AngularFirestoreDocument<any>;

  authUser: any;

  constructor(public database: AngularFirestore) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

    public saveServicios(servicios: Servicios){
      const id = this.database.createId();
      this.database.doc(`servicios/${id}`).set({
        id,
        idExpediente: servicios.idExpediente,
        despachoAereo: this.getValueFromBoolean(servicios.despachoAereo),
        despachoMaritimoExport: this.getValueFromBoolean(servicios.despachoMaritimoExport),
        despachoMaritimoImport: this.getValueFromBoolean(servicios.despachoMaritimoImport),
        revisionParaduanera: this.getValueFromBoolean(servicios.revisionParaduanera),
        revisionFisica: this.getValueFromBoolean(servicios.revisionFisica),
        t2l: this.getValueFromBoolean(servicios.t2l),
        ata: this.getValueFromBoolean(servicios.ata),
        dae: this.getValueFromBoolean(servicios.dae),
        eur1: this.getValueFromBoolean(servicios.eur1),
        entregaDocumentacion: this.getValueFromBoolean(servicios.entregaDocumentacion),
        recogidaDocumentos: this.getValueFromBoolean(servicios.recogidaDocumentos)
      });
      return id;
    }

    public update(servicios: Servicios){
      this.database.doc(`servicios/${servicios.id}`).update({
        despachoAereo: this.getValueFromBoolean(servicios.despachoAereo),
        despachoMaritimoExport: this.getValueFromBoolean(servicios.despachoMaritimoExport),
        despachoMaritimoImport: this.getValueFromBoolean(servicios.despachoMaritimoImport),
        revisionParaduanera: this.getValueFromBoolean(servicios.revisionParaduanera),
        revisionFisica: this.getValueFromBoolean(servicios.revisionFisica),
        t2l: this.getValueFromBoolean(servicios.t2l),
        ata: this.getValueFromBoolean(servicios.ata),
        dae: this.getValueFromBoolean(servicios.dae),
        eur1: this.getValueFromBoolean(servicios.eur1),
        entregaDocumentacion: this.getValueFromBoolean(servicios.entregaDocumentacion),
        recogidaDocumentos: this.getValueFromBoolean(servicios.recogidaDocumentos)
      });
    }

    public getServiciosExpediente(id):AngularFirestoreCollection<Servicios>{
      return this.database.collection('servicios', ref => ref.where('idExpediente', '==', id))
    }

    public getValueFromString(value:string){
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
