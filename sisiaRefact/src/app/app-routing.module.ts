import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importaciones de componentes
import { LoginComponent } from './auth/login/login.component';
import { ContainerComponent } from './pages/sharedComponents/container/container.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'inicio', component: ContainerComponent, data: { breadcrumb: 'Inicio'},
    children: [
      { path: 'home', 
        data: { breadcrumb: 'Home'},
        loadChildren: () => import('./pages/sharedComponents/home/home.module')
          .then(m => m.HomeModule) 
      },
      { path: 'administracion-programa-trabajo',
        data: { breadcrumb: 'Administracion Programa de Trabajo'},   
        loadChildren: () => import('./pages/Planeacion/Instancia-Ejecutora/Modulos/administracion-programa-trabajo/administracion-programa-trabajo.module')
          .then(m => m.AdministracionProgramaTrabajoModule) },
      { path: 'recursos-humanos-materiales',
        data: { breadcrumb: 'Recursos Humanos Materiales'}, 
        loadChildren: () => import('./pages/Planeacion/Instancia-Ejecutora/Modulos/Configuracion-Plantillas/recursos-humanos-materiales/recursos-humanos-materiales.module')
           .then(m => m.RecursosHumanosMaterialesModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
      { path: '', redirectTo: '/login', pathMatch: 'full'},
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
