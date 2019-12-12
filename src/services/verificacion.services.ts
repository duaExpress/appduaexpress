import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ExpedienteVerificacion } from '../models/expedienteVerificacion';
import { DatePipe } from '@angular/common';

@Injectable()
export class VerificacionService{

  verificacion: AngularFirestoreDocument<any>;

  authUser: any;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
    }

    public saveVerificacion(verificacion: ExpedienteVerificacion){

      this.database.doc(`verificaciones/${verificacion.id}`).set({
        id: verificacion.id,
        valorFactura: this.getValueFromBoolean(verificacion.valorFactura),
        tipoDivisa: this.getValueFromBoolean(verificacion.tipoDivisa),
        incoterm: this.getValueFromBoolean(verificacion.incoterm),
        descuentos: this.getValueFromBoolean(verificacion.descuentos),
        flete: this.getValueFromBoolean(verificacion.flete),
        seguro: this.getValueFromBoolean(verificacion.seguro),
        adicion: this.getValueFromBoolean(verificacion.adicion),

        mercanciaValor: this.getValueFromBoolean(verificacion.mercanciaValor),
        cifEnEuros: this.getValueFromBoolean(verificacion.cifEnEuros),
        arancel: this.getValueFromBoolean(verificacion.arancel),
        impuestosEspecales: this.getValueFromBoolean(verificacion.impuestosEspecales),
        antidumping: this.getValueFromBoolean(verificacion.antidumping),
        otrosTributos: this.getValueFromBoolean(verificacion.otrosTributos),
        descarga: this.getValueFromBoolean(verificacion.descarga),
        t3: this.getValueFromBoolean(verificacion.t3),
        serviciosExentos: this.getValueFromBoolean(verificacion.serviciosExentos),
        transporteInterior: this.getValueFromBoolean(verificacion.transporteInterior),
        otraAdicion: this.getValueFromBoolean(verificacion.otraAdicion),
        baseIVA: this.getValueFromBoolean(verificacion.baseIVA),
        importeGastosIVA: this.getValueFromBoolean(verificacion.importeGastosIVA),
        tipoImpositivo: this.getValueFromBoolean(verificacion.tipoImpositivo),
        recargoEquivalencia: this.getValueFromBoolean(verificacion.recargoEquivalencia),
        pagarIVA: this.getValueFromBoolean(verificacion.pagarIVA),

        textoCorrecto: this.getValueFromBoolean(verificacion.textoCorrecto),
        importeSup6000: this.getValueFromBoolean(verificacion.importeSup6000),
        numAuth: this.getValueFromBoolean(verificacion.numAuth),
        firma: this.getValueFromBoolean(verificacion.firma),
        copiaAuth: this.getValueFromBoolean(verificacion.copiaAuth),
        origenMercancia: this.getValueFromBoolean(verificacion.origenMercancia),
        paisDestino: this.getValueFromBoolean(verificacion.paisDestino),
        tipoCertificado: this.getValueFromString(verificacion.tipoCertificado)

      });
    }

    public update(verificacion: ExpedienteVerificacion){

      this.database.doc(`verificaciones/${verificacion.id}`).update({
        valorFactura: this.getValueFromBoolean(verificacion.valorFactura),
        tipoDivisa: this.getValueFromBoolean(verificacion.tipoDivisa),
        incoterm: this.getValueFromBoolean(verificacion.incoterm),
        descuentos: this.getValueFromBoolean(verificacion.descuentos),
        flete: this.getValueFromBoolean(verificacion.flete),
        seguro: this.getValueFromBoolean(verificacion.seguro),
        adicion: this.getValueFromBoolean(verificacion.adicion),

        mercanciaValor: this.getValueFromBoolean(verificacion.mercanciaValor),
        cifEnEuros: this.getValueFromBoolean(verificacion.cifEnEuros),
        arancel: this.getValueFromBoolean(verificacion.arancel),
        impuestosEspecales: this.getValueFromBoolean(verificacion.impuestosEspecales),
        antidumping: this.getValueFromBoolean(verificacion.antidumping),
        otrosTributos: this.getValueFromBoolean(verificacion.otrosTributos),
        descarga: this.getValueFromBoolean(verificacion.descarga),
        t3: this.getValueFromBoolean(verificacion.t3),
        serviciosExentos: this.getValueFromBoolean(verificacion.serviciosExentos),
        transporteInterior: this.getValueFromBoolean(verificacion.transporteInterior),
        otraAdicion: this.getValueFromBoolean(verificacion.otraAdicion),
        baseIVA: this.getValueFromBoolean(verificacion.baseIVA),
        importeGastosIVA: this.getValueFromBoolean(verificacion.importeGastosIVA),
        tipoImpositivo: this.getValueFromBoolean(verificacion.tipoImpositivo),
        recargoEquivalencia: this.getValueFromBoolean(verificacion.recargoEquivalencia),
        pagarIVA: this.getValueFromBoolean(verificacion.pagarIVA),

        textoCorrecto: this.getValueFromBoolean(verificacion.textoCorrecto),
        importeSup6000: this.getValueFromBoolean(verificacion.importeSup6000),
        numAuth: this.getValueFromBoolean(verificacion.numAuth),
        firma: this.getValueFromBoolean(verificacion.firma),
        copiaAuth: this.getValueFromBoolean(verificacion.copiaAuth),
        origenMercancia: this.getValueFromBoolean(verificacion.origenMercancia),
        paisDestino: this.getValueFromBoolean(verificacion.paisDestino),
        tipoCertificado: this.getValueFromString(verificacion.tipoCertificado)
      });
    }

    public getVerificacion(documentId: string): AngularFirestoreDocument<ExpedienteVerificacion>{
        return  this.database.collection('verificaciones').doc(documentId);
    }

    public deleteVerificacion(id: string){
      this.database.collection('verificaciones').doc(id).delete();
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
