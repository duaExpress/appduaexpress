import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaePage } from './dae';

@NgModule({
  declarations: [
    DaePage,
  ],
  imports: [
    IonicPageModule.forChild(DaePage),
  ],
})
export class DaePageModule {}
