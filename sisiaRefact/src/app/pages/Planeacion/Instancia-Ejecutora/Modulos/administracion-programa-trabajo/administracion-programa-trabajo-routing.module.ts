import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracionProgramaTrabajoComponent } from './administracion-programa-trabajo.component';

const routes: Routes = [{ path: '', component: AdministracionProgramaTrabajoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionProgramaTrabajoRoutingModule { }
