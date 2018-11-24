import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpedienteEditPage } from './expediente-edit';

@NgModule({
  declarations: [
    ExpedienteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpedienteEditPage),
  ],
})
export class ExpedienteEditPageModule {}
