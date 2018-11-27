import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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

  colorTheme = 'theme-green';
  bsConfig: Partial<BsDatepickerConfig>;
  dateFormat = 'DD-MMM-YYYY';
  fechaCreacion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private localeService: BsLocaleService) {
    this.bsConfig = Object.assign({}, {
      containerClass: this.colorTheme,
      dateInputFormat: this.dateFormat
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AereoDespachoPage');
  }

}
