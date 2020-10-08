import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importaciones de módulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Importación de componentes
import { LoginComponent } from './auth/login/login.component';
import { InformacionUsuarioComponent } from './pages/sharedComponents/informacion-usuario/informacion-usuario.component';
import { ContainerComponent } from './pages/sharedComponents/container/container.component';
import { AdministracionProyectoCampanaComponent } from './pages/Registro-Presupuestal/Unidad-Responsable/administracion-proyecto-campana/administracion-proyecto-campana.component';
import { RegistroProyectoCampanaComponent } from './pages/Registro-Presupuestal/Unidad-Responsable/registro-proyecto-campana/registro-proyecto-campana.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InformacionUsuarioComponent,
    ContainerComponent,
    AdministracionProyectoCampanaComponent,
    RegistroProyectoCampanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
