import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AereoDespachoComponent } from './aereo-despacho/aereo-despacho';
import { AereoImportComponent } from './aereo-import/aereo-import';
import { DaeComponent } from './dae/dae';
@NgModule({
	declarations: [AereoDespachoComponent,
    AereoImportComponent,
    DaeComponent,
    DaeComponent],
	imports: [IonicModule],
	exports: [AereoDespachoComponent,
    AereoImportComponent,
    DaeComponent,
    DaeComponent]
})
export class ComponentsModule {}
