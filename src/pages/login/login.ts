import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { HomePage} from '../home/home';
import { UserService } from '../../services/user.services';

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
    public alertCtrl : AlertController,
    public userService: UserService
  ) {
    this.user = new User();
  }

  ionViewDidLoad() {}

  login() {

    localStorage.clear();

    if (this.user.email && this.user.password) {

      this.auth.loginUser(this.user.email, this.user.password ).then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userService.getUserObsById(user.user.uid).subscribe(usuario => {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.signin(usuario);
        })

      })
       .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Notificación:',
          subTitle: 'Credenciales incorrectas/' + err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      });
    } else {
      let alert = this.alertCtrl.create({
         title: 'Notificación:',
         subTitle: "Complete Email y Password",
         buttons: ['Aceptar']
       });
       alert.present();
    }
  }

  signin(usuario : User){
    this.navCtrl.setRoot(HomePage,{
       profile: usuario.profile
    });
  }

}
