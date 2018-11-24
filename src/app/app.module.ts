import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { ExpedientesPage } from '../pages/expedientes/expedientes';
import { AereoDespachoPage } from '../pages/expedientes/aereo-despacho/aereo-despacho';
import { DaePage } from '../pages/expedientes/dae/dae';
import { MaritimoDespachoPage } from '../pages/expedientes/maritimo-despacho/maritimo-despacho';
import { EntregaDocumentacionPage } from '../pages/expedientes/entrega-documentacion/entrega-documentacion';

import { ExpedienteEditPage } from '../pages/expediente-edit/expediente-edit';
import { RegisterPage } from '../pages/register/register';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthProvider } from '../providers/auth/auth';
import { UserService } from '../services/user.services';
import { ExpedienteService } from '../services/expediente.services';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';

import { LogoutPage } from '../pages/logout/logout';

export const firebaseConfig = {
  apiKey: "AIzaSyCb7no2ZguQECh7appTgDkrLOrwcW5_9x4",
  authDomain: "duaexpress-online.firebaseapp.com",
  databaseURL: "https://duaexpress-online.firebaseio.com",
  projectId: "duaexpress-online",
  storageBucket: "duaexpress-online.appspot.com",
  messagingSenderId: "1020292615326"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpedientesPage,
    ExpedienteEditPage,
    AereoDespachoPage,
    DaePage,
    MaritimoDespachoPage,
    EntregaDocumentacionPage,
    LoginPage,
    UsuariosPage,
    RegisterPage,
    ListPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    Ng2SmartTableModule,
    RouterModule,
    AngularFirestoreModule
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
    ListPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFirestoreModule,
    UserService,
    ExpedienteService,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
