import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ExpedientesPage } from '../pages/expedientes/expedientes';

import { ExpedienteEditPage } from '../pages/expediente-edit/expediente-edit';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AuthProvider } from '../providers/auth/auth';
import { UserService } from '../services/user.services';
import { ExpedienteService } from '../services/expediente.services';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

import { LogoutPage } from '../pages/logout/logout';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale, enGbLocale } from 'ngx-bootstrap/locale';

import { AereoDespachoComponent } from '../components/aereo-despacho/aereo-despacho';
import { AereoImportComponent} from '../components/aereo-import/aereo-import';
import { DaeComponent } from '../components/dae/dae';
import { VerivalorComponent } from '../components/verivalor/verivalor';
import { VeriivaComponent } from '../components/veriiva/veriiva';
import { VeriexpComponent } from '../components/veriexp/veriexp';
import { ServiciosComponent } from '../components/servicios/servicios';

import { EntregaDocumentacionComponent } from '../components/entrega-documentacion/entrega-documentacion';
import { FicherosClienteComponent } from '../components/ficheros-cliente/ficheros-cliente';
import { FicherosAdminComponent } from '../components/ficheros-admin/ficheros-admin';
import { IncidenciasComponent } from '../components/incidencias/incidencias';
import { IncidenciaComponent } from '../components/incidencia/incidencia';
import { IndicacionesComponent } from '../components/indicaciones/indicaciones';
import { IndicacionComponent } from '../components/indicacion/indicacion';
import { ModalComponent } from '../components/modal/modal';

import { FicherosClienteService } from '../services/ficherosCliente.service';
import { FicherosAdminService } from '../services/ficherosAdmin.service';
import { IncidenciaService } from '../services/incidencia.service';
import { IndicacionService } from '../services/indicacion.service';
import { VerificacionService } from '../services/verificacion.services';
import { ServicioService } from '../services/servicio.service';
import { ModalService } from '../services/modal.service';


export const firebaseConfig = {
  apiKey: "AIzaSyCb7no2ZguQECh7appTgDkrLOrwcW5_9x4",
  authDomain: "duaexpress-online.firebaseapp.com",
  databaseURL: "https://duaexpress-online.firebaseio.com",
  projectId: "duaexpress-online",
  storageBucket: "duaexpress-online.appspot.com",
  messagingSenderId: "1020292615326"
};

defineLocale('es', esLocale);
defineLocale('en', enGbLocale);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpedientesPage,
    ExpedienteEditPage,
    LoginPage,
    UsuariosPage,
    RegisterPage,
    LogoutPage,
    AereoDespachoComponent,
    AereoImportComponent,
    DaeComponent,
    EntregaDocumentacionComponent,
    FicherosClienteComponent,
    FicherosAdminComponent,
    IncidenciasComponent,
    IncidenciaComponent,
    IndicacionesComponent,
    IndicacionComponent,
    ModalComponent,
    VerivalorComponent,
    VeriivaComponent,
    VeriexpComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule,
    AngularFirestoreModule,
    BsDatepickerModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExpedientesPage,
    ExpedienteEditPage,
    LoginPage,
    UsuariosPage,
    RegisterPage,
    LogoutPage,
    IncidenciaComponent,
    IndicacionComponent,
    VerivalorComponent,
    VeriivaComponent,
    VeriexpComponent,
    ServiciosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFirestoreModule,
    UserService,
    ExpedienteService,
    FicherosClienteService,
    FicherosAdminService,
    IncidenciaService,
    IndicacionService,
    ModalService,
    VerificacionService,
    ServicioService,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
