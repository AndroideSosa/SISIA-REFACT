import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionProgramaTrabajoRoutingModule } from './administracion-programa-trabajo-routing.module';
import { AdministracionProgramaTrabajoComponent } from './administracion-programa-trabajo.component';


@NgModule({
  declarations: [AdministracionProgramaTrabajoComponent],
  imports: [
    CommonModule,
    AdministracionProgramaTrabajoRoutingModule
  ]
})
export class AdministracionProgramaTrabajoModule { }
