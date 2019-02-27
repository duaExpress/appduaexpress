import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Expediente } from '../../../models/expediente';

/**
 * Generated class for the AereoDespachoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aereo-despacho',
  templateUrl: 'aereo-despacho.html',
})
export class AereoDespachoPage {

  bsConfig: Partial<BsDatepickerConfig>;
  dateFormat = 'DD-MMM-YYYY';
  fechaCreacion: any;
  expediente: Expediente;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localeService: BsLocaleService) {
    this.expediente = new Expediente();

    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-green',
      dateInputFormat: this.dateFormat,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AereoDespachoPage');
  }

}
