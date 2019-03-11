import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AereoImportPage } from './aereo-import';

@NgModule({
  declarations: [
    AereoImportPage,
  ],
  imports: [
    IonicPageModule.forChild(AereoImportPage),
  ],
})
export class AereoImportPageModule {}
