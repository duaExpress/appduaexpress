import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController
  ) {
    this.user = new User();
  }

  ionViewDidLoad() {}

  login() {
    if (this.user.email && this.user.password) {
      this.auth.loginUser(this.user.email, this.user.password ).then((user) => {
        this.navCtrl.setRoot(HomePage);
      })
       .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      });
    } else {
      let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "Complete Email y Password",
         buttons: ['Aceptar']
       });
       alert.present();
    }
  }

  signin(){
    this.navCtrl.setRoot(RegisterPage,{
       emailPresent: this.user.email,
       passwordPresent: this.user.password,
       idUser: null
    });
  }

}
