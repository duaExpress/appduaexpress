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
  texto : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afStorage: AngularFireStorage,
    public indicacionService: IndicacionService,
    public userService: UserService
  ) {
    this.indicacion.idExpediente = this.navParams.get("idExpediente");
    this.localUser = this.userService.getLocalUser();

  }


  saveIndicacion(){

      this.idExpediente= this.indicacionService.saveIndicacion(this.indicacion);
      this.navCtrl.pop();

  }



}
