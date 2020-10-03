import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importaciones de componentes
import { LoginComponent } from './auth/login/login.component';
import { ContainerComponent } from './pages/sharedComponents/container/container.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'container', component: ContainerComponent, data: { breadcrumb: 'Container'},
    children: [
      { path: 'administracion-planeacion', 
        data: { breadcrumb: 'Administracion de la Planeación'},
        loadChildren: () => import('./pages/Registro-Presupuestal/Instancia-Ejecutora/administracion-planeacion/administracion-planeacion.module').then(m => m.AdministracionPlaneacionModule) 
      },
      { path: 'home', 
        data: { breadcrumb: 'Home'},
        loadChildren: () => import('./pages/sharedComponents/home/home.module').then(m => m.HomeModule) 
      }
    ]
  },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
