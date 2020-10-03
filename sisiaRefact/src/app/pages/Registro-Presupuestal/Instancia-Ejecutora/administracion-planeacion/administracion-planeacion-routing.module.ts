import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracionPlaneacionComponent } from './administracion-planeacion.component';

const routes: Routes = [{ path: '', component: AdministracionPlaneacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionPlaneacionRoutingModule { }
