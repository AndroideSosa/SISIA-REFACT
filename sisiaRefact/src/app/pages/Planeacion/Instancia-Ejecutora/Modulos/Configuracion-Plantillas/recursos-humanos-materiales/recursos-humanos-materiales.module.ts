import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosHumanosMaterialesRoutingModule } from './recursos-humanos-materiales-routing.module';
//Importacion de componentes
import { RecursosHumanosMaterialesComponent } from './recursos-humanos-materiales.component';
import { TabComponentComponent } from '../../../Componentes/Configuracion-Plantillas/tab-component/tab-component.component';


@NgModule({
  declarations: [ RecursosHumanosMaterialesComponent, 
                  TabComponentComponent],
  imports: [
    CommonModule,
    RecursosHumanosMaterialesRoutingModule
  ]
})
export class RecursosHumanosMaterialesModule { }
