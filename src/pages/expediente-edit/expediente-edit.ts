import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../services/expediente.services';

import { ExpedientesPage } from '../expedientes/expedientes';

/**
* Generated class for the ExpedienteEditPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-expediente-edit',
  templateUrl: 'expediente-edit.html',
})
export class ExpedienteEditPage {

  expedienteForm : FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder,
    public database: AngularFirestore,
    public expedienteService: ExpedienteService
  ) {
      this.expedienteForm = formBuilder.group({
        numExpediente: ['', Validators.compose([Validators.maxLength(35), Validators.required])],
        referencia: ['', Validators.compose([Validators.maxLength(35), Validators.required])],
        numConocimiento: ['', Validators.compose([Validators.maxLength(35),  Validators.required])],
        empresa: ['', Validators.compose([Validators.maxLength(70),  Validators.required])],
        partida: ['', Validators.compose([Validators.maxLength(16),  Validators.required])],
        fechaVuelo: ['', Validators.compose([Validators.required])],
        //peso: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]{10}')])]
      });
    }

    ionViewDidLoad() {}

    public saveExpediente(event) {

      if (this.expedienteForm.valid) {
        let expediente = new Expediente();
        expediente.numExpediente = this.expedienteForm.value.numExpediente;
        expediente.empresa = this.expedienteForm.value.empresa;
        expediente.referencia = this.expedienteForm.value.referencia;
        expediente.numConocimiento = this.expedienteForm.value.numConocimiento;
        expediente.fechaVuelo = this.expedienteForm.value.fechaVuelo;
        expediente.partida = this.expedienteForm.value.partida;
        //expediente.peso = this.expedienteForm.value.peso;
        this.expedienteService.saveExpediente(expediente);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "Complete todos los datos del formulario correctamente",
          buttons: ['Aceptar']
        });
        alert.present();
      }
    }

    public close() {
      this.navCtrl.setRoot(ExpedientesPage);
    }
  }
