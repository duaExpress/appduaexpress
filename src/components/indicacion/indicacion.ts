import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { IndicacionService } from '../../services/indicacion.service';
import { UserService } from '../../services/user.services';
import { Indicacion } from '../../models/indicacion';


@Component({
  selector: 'indicacion',
  templateUrl: 'indicacion.html'
})
export class IndicacionComponent {

  indicacinDocument: AngularFirestoreDocument<Indicacion>;
  indicacion= new Indicacion();
  idExpediente : any;
  idIndicacion : any;
  localUser : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public indicacionService: IndicacionService,
    public userService: UserService
  ) {
    this.idExpediente = this.navParams.get("idExpediente");
    this.idIndicacion = this.navParams.get("idIncidencia");
    this.localUser = this.userService.getLocalUser();

    if(this.idIndicacion != '0' && this.idIndicacion != undefined){
      this.indicacinDocument = this.indicacionService.getIndicacion(this.idIndicacion);
      this.indicacinDocument.valueChanges().subscribe(inc => {
          this.indicacion= inc;
      })
    }else{

      this.idIndicacion=0;

    }

  }


  editIndicacion(){

    if(this.idIndicacion == '0'){

      this.idExpediente= this.indicacionService.saveIncidencia(this.indicacion);

    }else{

       // this.indicacionService.update(this.indicacion);

    }

    this.navCtrl.pop();
  }

}
