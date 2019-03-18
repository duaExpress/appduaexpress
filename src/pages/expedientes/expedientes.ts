import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { AngularFirestore} from 'angularfire2/firestore';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../services/expediente.services';
import { Observable } from 'rxjs';
import { ExpedienteEditPage } from '../expediente-edit/expediente-edit';
import { ExpedienteSubTipo } from '../../models/global.enum';
import { AereoDespachoPage } from '../expedientes/aereo-despacho/aereo-despacho';
import { AereoImportPage } from '../expedientes/aereo-import/aereo-import';
import { DaePage }  from '../expedientes/dae/dae';

interface ExpTipo {
  id:string;
  label:string;
}

@IonicPage()
@Component({
  selector: 'page-expedientes',
  templateUrl: 'expedientes.html',
})

export class ExpedientesPage {

  expTipoArray: ExpTipo[] = [
    { id:ExpedienteSubTipo.DespachoAereoExportacion, label:'Despacho Aéreo Exportación' },
    { id:ExpedienteSubTipo.DespachoAereoImportacion, label:'Despacho Aéreo Importación' },
    { id:ExpedienteSubTipo.DocEntega, label:'Entrega Documentación' },
    { id:ExpedienteSubTipo.DocRecogida, label:'Recogida Documentos' },
    { id:ExpedienteSubTipo.DAE, label:'DAE' },
    { id:ExpedienteSubTipo.RevisionFisica, label:'Revisión Física' }
  ];

  settings = {
    actions: {
      columnTitle: 'Acciones',
      position: 'right',
      add: false,
      class: 'align-center',
    },
    columns: {
      empresa: {
        title: 'Empresa',
        width: '18%',
        class: 'align-center',
      },
      numExpediente: {
        title: 'Nº Expediente',
        width: '18%',
        class: 'align-center',
      },
      numConocimiento: {
        title: 'Nº Conocimiento',
        width: '18%',
        class: 'align-center',
      },
      referencia: {
        title: 'Referencia',
        width: '18%',
        class: 'align-center',
      },
      fecha: {
        title: 'Fecha',
        width: '18%',
        class: 'align-center',
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

  expedientes: Observable<Expediente[]>;
  nuevoExpediente: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: AngularFirestore,
    public expedienteService : ExpedienteService,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl : AlertController
  ) {
    this.expedientes = expedienteService.getExpedientes().valueChanges();
  }

  ionViewDidLoad() {}

  public newExpediente(event) {

    if (this.nuevoExpediente) {
      this.navCtrl.push(ExpedienteEditPage,{idExpediente: '0', tipo: this.nuevoExpediente});
    } else {
      let alert = this.alertCtrl.create({
        title: 'Notificación:',
        subTitle: 'Seleccione un tipo de expediente',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }

  public editExpediente(event) {
    console.log(event.data);
    this.navCtrl.push(ExpedienteEditPage,{idExpediente: event.data.id});
  }

  public updateExpediente(event) {
    if (window.confirm('¿Estas seguro que quieres modificar el expediente?')) {
      //console.log(event.newData.id);
      let expediente = event.newData;
      expediente.id = event.data.id;
      this.expedienteService.updateExpediente(expediente);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  public deleteExpediente(event) {
    if (window.confirm('¿Estas seguro que quieres borrar el expediente seleccionado?')) {
      console.log(event.data.uid);
      this.expedienteService.deleteExpediente(event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
