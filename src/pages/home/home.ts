import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExpedientesPage } from '../expedientes/expedientes';
import { UsuariosPage } from '../usuarios/usuarios';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {}

  public home() {
    this.navCtrl.setRoot(HomePage);
  }

  public records() {
    this.navCtrl.setRoot(ExpedientesPage);
  }

  public users() {
    this.navCtrl.setRoot(UsuariosPage);
  }

  public logout() {
    this.navCtrl.setRoot(LogoutPage);
  }

}
