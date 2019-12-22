import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AngularFireList, AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { Profile } from '../../models/global.enum';
import { UserService } from '../../services/user.services';
import { HomePage } from '../home/home';
import { UsuariosPage} from '../usuarios/usuarios';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginPage } from '../login/login';

/**
* Generated class for the RegisterPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //user : User;
  //users: AngularFireList<any>;
  users: AngularFirestoreCollection<any>;

  registerForm : FormGroup;
  submitAttempt: boolean = false;
  authUser: any;
  idUser: any;
  user: AngularFirestoreDocument<any>;
  usuario : User ;
  isUserEditable : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder,
    public database: AngularFirestore,
    public userService : UserService
  ) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.idUser = navParams.get('idUser');
    this.isUserEditable = false;

    if (this.idUser != null) {
      this.users = userService.getUsers();
     // this.usuario= this.userService.getUserObsById(this.idUser);
      this.isUserEditable = true;

      this.registerForm = formBuilder.group({
        name: ['', Validators.compose([Validators.maxLength(70), Validators.required])],
        cif: ['', Validators.compose([Validators.maxLength(9), Validators.pattern('[a-zA-Z]{1}[0-9]{8}'), Validators.required])],
        company: ['', Validators.compose([Validators.maxLength(50),  Validators.required])],
        address: ['', Validators.compose([Validators.maxLength(70),  Validators.required])],
        postalCode: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]{5}'), Validators.required])],
        city: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        state: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        tel: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9\- ]*'), Validators.required])],
      });
    } else {

      this.registerForm = formBuilder.group({
        email: [navParams.get("emailPresent"), Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
        password: [navParams.get("passwordPresent"), Validators.compose([Validators.maxLength(30), Validators.required])],
        name: ['', Validators.compose([Validators.maxLength(70), Validators.required])],
        cif: ['', Validators.compose([Validators.maxLength(9), Validators.pattern('[a-zA-Z]{1}[0-9]{8}'), Validators.required])],
        company: ['', Validators.compose([Validators.maxLength(50),  Validators.required])],
        address: ['', Validators.compose([Validators.maxLength(70),  Validators.required])],
        postalCode: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]{5}'), Validators.required])],
        city: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        state: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        tel: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9\- ]*'), Validators.required])],
      });
    }

  }

  ionViewDidLoad() {
    if (this.idUser != null ){
     // this.usuario = this.usuario.pipe(
        tap(user => this.registerForm.patchValue(user))
      //);
    }
  }

  async registerUser() {
    this.submitAttempt = true;

    if (this.registerForm.valid) {
      let isUserRegistered = await this.userService.isUserAlreadyRegistered(this.registerForm.value.email);

      if (isUserRegistered) {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "El email ya está registrado en la aplicación",
          buttons: ['Aceptar']
        });
        alert.present();
      } else {
        console.log('registrando...');
        this.auth.registerUser(this.registerForm.value.email, this.registerForm.value.password).then(
          (successUser) => {
          //  this.authUser = JSON.parse(window.localStorage.getItem('user'));
          //  this.user = this.userService.getUserById(this.authUser.uid);
          console.log('guardando');
           //
            this.usuario = new User();
            this.usuario.uid = successUser.user.uid;
            this.usuario.address= this.registerForm.value.address;
            this.usuario.cif= this.registerForm.value.cif;
            this.usuario.company= this.registerForm.value.company;
            this.usuario.email= this.registerForm.value.email;
            this.usuario.emailNotif= this.registerForm.value.email;
            this.usuario.name= this.registerForm.value.name;
            this.usuario.postalCode= this.registerForm.value.postalCode;
            this.usuario.profile= Profile.User;
            this.usuario.tel= this.registerForm.value.tel;
            this.usuario.city= this.registerForm.value.city;
            this.usuario.active= false;
            this.usuario.state= this.registerForm.value.state;

            this.userService.saveUser(this.usuario);
            window.localStorage.setItem('user', JSON.stringify(successUser));
            this.navCtrl.setRoot(HomePage);
          });
        }
      } else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "Complete todos los datos del formulario correctamente",
          buttons: ['Aceptar']
        });
        alert.present();
      }
    }

    public updateUser(){
      this.submitAttempt = true;

      if (this.registerForm.valid){
        //Hacemos mix del formulario y lo que tenemos en memoria
        let userToUpdate = new User();
        userToUpdate.uid = this.idUser;
        userToUpdate.name = this.registerForm.value.name;
        userToUpdate.cif = this.registerForm.value.cif;
        userToUpdate.company = this.registerForm.value.company;
        userToUpdate.address = this.registerForm.value.address;
        userToUpdate.postalCode = this.registerForm.value.postalCode;
        userToUpdate.city = this.registerForm.value.city;
        userToUpdate.state = this.registerForm.value.state;
        userToUpdate.tel = this.registerForm.value.tel;

        this.userService.updateUserFromRegistry(userToUpdate);

        this.navCtrl.setRoot(UsuariosPage);
      } else {
        //TODO poner en una función generica
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: "Complete todos los datos del formulario correctamente",
          buttons: ['Aceptar']
        });
        alert.present();
      }
    }

    public close() {
      this.navCtrl.setRoot(LoginPage);
    }

    public hide() {
      this.navCtrl.setRoot(UsuariosPage);
    }
  }
