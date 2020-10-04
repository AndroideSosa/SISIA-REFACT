//Importaciones Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Importaciones Componetes
import { RecursosHumanosMaterialesRoutingModule } from './recursos-humanos-materiales-routing.module';
import { RecursosHumanosMaterialesComponent } from './recursos-humanos-materiales.component';
import { DatosIEComponent } from '../../Componentes/Configuracion-Plantillas/datos-ie/datos-ie.component';
import { InstalacionesComponent } from '../../Componentes/Configuracion-Plantillas/instalaciones/instalaciones.component';
import { InventarioVehicularComponent } from '../../Componentes/Configuracion-Plantillas/inventario-vehicular/inventario-vehicular.component';
import { BienServicioComponent } from '../../Componentes/Configuracion-Plantillas/bien-servicio/bien-servicio.component';
import { TabComponentComponent } from '../../Componentes/Configuracion-Plantillas/tab-component/tab-component.component';


@NgModule({
  declarations: 
  [ RecursosHumanosMaterialesComponent,
    TabComponentComponent,
    DatosIEComponent,
    InstalacionesComponent,
    InventarioVehicularComponent,
    BienServicioComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RecursosHumanosMaterialesRoutingModule
  ]
})
export class RecursosHumanosMaterialesModule { }
