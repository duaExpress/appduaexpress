import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../models/user';
import { UserService } from '../../services/user.services';
import { Observable } from 'rxjs';
import { Profile} from '../../models/global.enum';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})

export class UsuariosPage {

  settings = {
    //hideSubHeader: true,//Borrado cabecera búsquedas
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
    },
    columns: {
      name: {
        title: 'Nombre',
        width: '15%',
      },
      company: {
        title: 'Empresa',
        width: '15%',
      },
      cif: {
        title: 'CIF',
        width: '8%',
      },
      email: {
        title: 'Email',
        editable: false,
        width: '15%',
      },
      emailNotif: {
        title: 'Email Notificaciones',
        width: '15%',
      },
      tel: {
        title: 'Telefono',
        width: '10%',
      },
      active: {
        title: 'Activo',
        filter: false,
        type: 'html',
        valuePrepareFunction: (value) => { return value === true ? 'Sí' : 'No' },
        editor: {
          type: 'list',
          config: {
            list: [{ value: true, title: 'Sí' }, { value: false, title: 'No' }],
          },
        },
        width: '5%',
      },
      profile: {
        title: 'Perfil',
        filter: false,
        type: 'html',
        valuePrepareFunction: (value) => { return value === Profile.Administrator ? 'Administrador' : 'Usuario' },
        editor: {
          type: 'list',
          config: {
            list: [{ value: Profile.User, title: 'Usuario' }, { value: Profile.Administrator, title: 'Administrador' }],
          },
        },
        width: '8%',
      }
    },
    edit:{
      confirmSave:true,
      editButtonContent: '<center class="icon-edit">Editar</center>',
      saveButtonContent: '<center class="icon-acept">Aceptar</center>',
      cancelButtonContent: '<center class="icon-close">Cancelar</center>'
    },
    delete :{
      confirmDelete: true,
      deleteButtonContent: '<center class="icon-trash">Borrar</center>',
      cancelButtonContent: '<center class="icon-close">Cancelar</center>'
    },
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: '',
  };

  users: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: AngularFirestore,
    public userService : UserService,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.users = userService.getAppUsers();
  }

  ionViewDidLoad() {}

  public updateUser(event)  {
    //console.log(event.newData.uid);
    if (window.confirm('¿Estas seguro que quieres modificar el usuario?')) {
      let user = event.newData;
      user.uid = event.data.uid;
      this.userService.updateUser(user);
      event.confirm.resolve();
    } else  {
      event.confirm.reject();
    }
  }

  public editUser(event){
    this.navCtrl.push(RegisterPage,{idUser: event.data.uid});
  }

  public deleteUser(event) {
    if (window.confirm('¿Estas seguro que quieres borrar el usuario seleccionado?')) {
      console.log(event.data.uid);
      this.userService.deleteUser(event.data.uid);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
