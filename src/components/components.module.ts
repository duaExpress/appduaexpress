import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AereoDespachoComponent } from './aereo-despacho/aereo-despacho';
import { AereoImportComponent } from './aereo-import/aereo-import';
import { DaeComponent } from './dae/dae';
import { EntregaDocumentacionComponent } from './entrega-documentacion/entrega-documentacion';
import { FicherosClienteComponent } from './ficheros-cliente/ficheros-cliente';
import { FicherosAdminComponent } from './ficheros-admin/ficheros-admin';
import { IncidenciasComponent } from './incidencias/incidencias';
@NgModule({
	declarations: [AereoDespachoComponent,
    AereoImportComponent,
    DaeComponent,
    DaeComponent,
    EntregaDocumentacionComponent,
    FicherosClienteComponent,
    FicherosAdminComponent,
    IncidenciasComponent],
	imports: [IonicModule],
	exports: [AereoDespachoComponent,
    AereoImportComponent,
    DaeComponent,
    DaeComponent,
    EntregaDocumentacionComponent,
    FicherosClienteComponent,
    FicherosAdminComponent,
    IncidenciasComponent]
})
export class ComponentsModule {}
