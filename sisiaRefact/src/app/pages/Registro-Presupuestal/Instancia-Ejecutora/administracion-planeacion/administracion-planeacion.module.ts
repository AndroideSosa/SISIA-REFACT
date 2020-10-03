import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionPlaneacionRoutingModule } from './administracion-planeacion-routing.module';
import { AdministracionPlaneacionComponent } from './administracion-planeacion.component';


@NgModule({
  declarations: [AdministracionPlaneacionComponent],
  imports: [
    CommonModule,
    AdministracionPlaneacionRoutingModule
  ]
})
export class AdministracionPlaneacionModule { }
