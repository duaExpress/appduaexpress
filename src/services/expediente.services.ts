import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Expediente } from '../models/expediente';
import { DatePipe } from '@angular/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';

@Injectable()
export class ExpedienteService{

  expediente: AngularFirestoreDocument<any>;
  expedientes: AngularFirestoreCollection<any>;
  authUser: any;
  usuario: User;

  constructor(public database: AngularFirestore,  public datepipe: DatePipe, public userService : UserService) {
      this.authUser = JSON.parse(window.localStorage.getItem('user'));
      this.usuario = JSON.parse(window.localStorage.getItem('usuario'));
      this.expedientes = this.getExpedientes();
    }

    public saveExpediente(expediente: Expediente){

      const id = this.database.createId();

      console.log(expediente);

      this.database.doc(`expedientes/${id}`).set({
        id,
        numExpediente:this.getValueFromString(expediente.numExpediente),
        referencia: this.getValueFromString(expediente.referencia),
        numConocimiento: this.getValueFromString(expediente.numConocimiento),
        empresa: this.usuario.cif,
        creador: this.usuario.email,
        fecha:this.getDateNow(),
        ExpedienteTipo: this.getValueFromString(expediente.ExpedienteTipo),
        ExpedienteSubTipo: expediente.ExpedienteSubTipo,

        impresionEtiq: this.getValueFromBoolean(expediente.impresionEtiq),
        bultos: this.getValueFromNumber(expediente.bultos),
        peso: this.getValueFromNumber(expediente.peso),
        partida: this.getValueFromString(expediente.partida),

        fechaVuelo: this.getValueFromString(expediente.fechaVuelo),
        mercanciaEtiq: this.getValueFromBoolean(expediente.mercanciaEtiq),
        llevaEur1: this.getValueFromBoolean(expediente.llevaEur1),
        paraduanero: this.getValueFromBoolean(expediente.paraduanero),
        soivre: this.getValueFromBoolean(expediente.soivre),
        cites: this.getValueFromBoolean(expediente.cites),
        fito: this.getValueFromBoolean(expediente.fito),
        sanidad: this.getValueFromBoolean(expediente.sanidad),
        sanidadAnimal: this.getValueFromBoolean(expediente.sanidadAnimal),
        farmacia: this.getValueFromBoolean(expediente.farmacia),
        dae: this.getValueFromBoolean(expediente.dae),

        almacenRecogida:this.getValueFromString(expediente.almacenRecogida),
        numPrecinto:this.getValueFromString(expediente.numPrecinto),
        destinoMercancia:this.getValueFromString(expediente.destinoMercancia),
        cpDestino: this.getValueFromNumber(expediente.cpDestino),

        numDAE:this.getValueFromString(expediente.numDAE),
        numDUA:this.getValueFromString(expediente.numDUA),
        numFactura:this.getValueFromString(expediente.numFactura),
        closingTime:this.getValueFromString(expediente.closingTime),
        fechaSalida:this.getValueFromString(expediente.fechaSalida),
        exportador:this.getValueFromString(expediente.exportador),
        buqueFecha:this.getValueFromString(expediente.buqueFecha),
        carpetaFecha:this.getValueFromString(expediente.carpetaFecha),
        bandera:this.getValueFromString(expediente.bandera),

        ubicacion:this.getValueFromString(expediente.ubicacion),
        destino:this.getValueFromString(expediente.destino),
        consignatario:this.getValueFromString(expediente.consignatario),
        contenedores:this.getValueFromString(expediente.contenedores),
        mercancia:this.getValueFromString(expediente.mercancia),
        instrucciones:this.getValueFromString(expediente.instrucciones)
      });
      return id;
    }

    public updateExpediente(expediente: Expediente){

      this.expedientes.doc(expediente.id).update({
        numExpediente:this.getValueFromString(expediente.numExpediente),
        referencia: this.getValueFromString(expediente.referencia),
        numConocimiento: this.getValueFromString(expediente.numConocimiento),
        fecha:this.getDateNow(),
        ExpedienteTipo: this.getValueFromString(expediente.ExpedienteTipo),
        ExpedienteSubTipo: expediente.ExpedienteSubTipo,

        impresionEtiq: this.getValueFromBoolean(expediente.impresionEtiq),
        bultos: this.getValueFromNumber(expediente.bultos),
        peso: this.getValueFromNumber(expediente.peso),
        partida: this.getValueFromString(expediente.partida),

        fechaVuelo: this.getValueFromString(expediente.fechaVuelo),
        mercanciaEtiq: this.getValueFromBoolean(expediente.mercanciaEtiq),
        llevaEur1: this.getValueFromBoolean(expediente.llevaEur1),
        paraduanero: this.getValueFromBoolean(expediente.paraduanero),
        soivre: this.getValueFromBoolean(expediente.soivre),
        cites: this.getValueFromBoolean(expediente.cites),
        fito: this.getValueFromBoolean(expediente.fito),
        sanidad: this.getValueFromBoolean(expediente.sanidad),
        sanidadAnimal: this.getValueFromBoolean(expediente.sanidadAnimal),
        farmacia: this.getValueFromBoolean(expediente.farmacia),
        dae: this.getValueFromBoolean(expediente.dae),

        almacenRecogida:this.getValueFromString(expediente.almacenRecogida),
        numPrecinto:this.getValueFromString(expediente.numPrecinto),
        destinoMercancia:this.getValueFromString(expediente.destinoMercancia),
        cpDestino: this.getValueFromNumber(expediente.cpDestino),

        numDAE:this.getValueFromString(expediente.numDAE),
        numDUA:this.getValueFromString(expediente.numDUA),
        numFactura:this.getValueFromString(expediente.numFactura),
        closingTime:this.getValueFromString(expediente.closingTime),
        fechaSalida:this.getValueFromString(expediente.fechaSalida),
        exportador:this.getValueFromString(expediente.exportador),
        buqueFecha:this.getValueFromString(expediente.buqueFecha),
        carpetaFecha:this.getValueFromString(expediente.carpetaFecha),
        bandera:this.getValueFromString(expediente.bandera),

        ubicacion:this.getValueFromString(expediente.ubicacion),
        destino:this.getValueFromString(expediente.destino),
        consignatario:this.getValueFromString(expediente.consignatario),
        contenedores:this.getValueFromString(expediente.contenedores),
        mercancia:this.getValueFromString(expediente.mercancia),
        instrucciones:this.getValueFromString(expediente.instrucciones)
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
      if(this.usuario.profile == 'A'){
        return this.database.collection(`expedientes`);
      }else{
        return  this.database.collection('expedientes', ref => ref.where('empresa', '==', this.usuario.cif));
      }

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
