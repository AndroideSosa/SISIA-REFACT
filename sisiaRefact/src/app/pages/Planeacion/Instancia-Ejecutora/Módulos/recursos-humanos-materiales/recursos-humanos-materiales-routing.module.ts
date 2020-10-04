import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importacion de Componentes
import { RecursosHumanosMaterialesComponent } from './recursos-humanos-materiales.component';
import { DatosIEComponent } from '../../Componentes/Configuracion-Plantillas/datos-ie/datos-ie.component';
import { InstalacionesComponent } from '../../Componentes/Configuracion-Plantillas/instalaciones/instalaciones.component';
import { InventarioVehicularComponent } from '../../Componentes/Configuracion-Plantillas/inventario-vehicular/inventario-vehicular.component';
import { BienServicioComponent } from '../../Componentes/Configuracion-Plantillas/bien-servicio/bien-servicio.component';
import { PersonalComponent } from '../../Componentes/Configuracion-Plantillas/personal/personal.component';

const routes: Routes = [
  { path: '', component: RecursosHumanosMaterialesComponent,
      children: [
        { path: 'datos-instancia-ejecutora', 
          component: DatosIEComponent,
          data: { breadcrumb: 'Datos Instancia Ejecutora'}},
        { path: 'personal', 
          component: PersonalComponent,
          data: { breadcrumb: 'Personal'}},
        { path: 'instalaciones', 
          component: InstalacionesComponent,
          data: { breadcrumb: 'Instalaciones'}},
        { path: 'inventario-vehicular', 
          component: InventarioVehicularComponent,
          data: { breadcrumb: 'Inventario Vehicular'}},
        { path: 'bien-servicio', 
          component: BienServicioComponent,
          data: { breadcrumb: 'Bien o Servicio'}},
        { path: '', redirectTo: 'datos-instancia-ejecutora', pathMatch: 'full'},
      ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosMaterialesRoutingModule { }
