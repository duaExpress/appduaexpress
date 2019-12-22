import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExpedientesPage } from '../expedientes/expedientes';
import { UsuariosPage } from '../usuarios/usuarios';
import { LogoutPage } from '../logout/logout';
import { UserService } from '../../services/user.services';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profile: string;
  user : Observable<User>;
  admin: boolean;

  constructor(
    public navCtrl: NavController, public userService: UserService, public navParams: NavParams
  ) {

    this.profile = this.navParams.get("profile");
    this.user = this.userService.getUser();
    this.admin= (this.profile === 'A');

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

