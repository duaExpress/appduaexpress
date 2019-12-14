import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExpedientesPage } from '../expedientes/expedientes';
import { UsuariosPage } from '../usuarios/usuarios';
import { LogoutPage } from '../logout/logout';
import { UserService } from '../../services/user.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profile: string;

  constructor(
    public navCtrl: NavController, public userService: UserService
  ) {
    this.userService.getUser().subscribe(user => {
      if (user) {
        this.profile = user.profile;
      }
    })
  }

  public isAdmin() {
    return 'A' === this.profile;
  }

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

