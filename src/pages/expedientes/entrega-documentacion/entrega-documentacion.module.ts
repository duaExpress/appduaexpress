import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntregaDocumentacionPage } from './entrega-documentacion';

@NgModule({
  declarations: [
    EntregaDocumentacionPage,
  ],
  imports: [
    IonicPageModule.forChild(EntregaDocumentacionPage),
  ],
})
export class EntregaDocumentacionPageModule {}
