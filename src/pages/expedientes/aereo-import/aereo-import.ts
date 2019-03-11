import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Expediente } from '../../../models/expediente';

import * as moment from 'moment';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
/**
 * Generated class for the AereoImportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aereo-import',
  templateUrl: 'aereo-import.html',
})
export class AereoImportPage {

  expediente: Expediente;
  dateFormat = 'DD/MM/YYYY';
  fechaCreacion: any;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localeService: BsLocaleService) {
      const locale = 'es';
      this.expediente = new Expediente();

      this.bsConfig = Object.assign({}, {
        containerClass: 'theme-green',
        dateInputFormat: this.dateFormat,
      });
      this.localeService.use(locale);
      moment.locale(locale);
  }

  ionViewDidLoad() {}
}
