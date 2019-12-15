import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Expediente } from '../../models/expediente';
import { ServicioService } from '../../services/servicio.service';
import { Servicios } from '../../models/servicios';

@Component({
  selector: 'servicios',
  templateUrl: 'servicios.html'
})
export class ServiciosComponent {

  idExpediente: string;
  expedienteDocument: AngularFirestoreDocument<Expediente>;
  serviciosDocument: AngularFirestoreCollection<Servicios>;
  expediente: Expediente;
  servicios= new Servicios();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public servicioService: ServicioService
  ) {
    this.servicios.id='0';
    this.servicios.despachoAereo=false;

    this.idExpediente = this.navParams.get("idExpediente");
      if(this.idExpediente != '0' ){
        this.serviciosDocument = this.servicioService.getServiciosExpediente(this.idExpediente);
        this.serviciosDocument.valueChanges().subscribe(serviciosDoc => {
          if(serviciosDoc[0] != null && serviciosDoc[0] != undefined){
            this.servicios=serviciosDoc[0];
          }
        })
        this.servicios.idExpediente=this.idExpediente;
     }
  }

  guardar(){
    if(this.servicios.id != '0' ){
      this.servicioService.update(this.servicios);
    }else{
      this.servicioService.saveServicios(this.servicios);
    }
  }

}
