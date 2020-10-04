import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {

  @Input() tab:string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

    //Función para navegar a DatosIE
    public goToDataIE():void{
      this._router.navigate(['/inicio/recursos-humanos-materiales/datos-instancia-ejecutora']);
    }
    //Función para navegar a Personal
    public goToPersonal():void{
      this._router.navigate(['/inicio/recursos-humanos-materiales/personal']);
    }
    //Función para navegar a Instalaciones
    public goToInstallations():void{
      this._router.navigate(['/inicio/recursos-humanos-materiales/instalaciones']);
    }
    //Función para navegar a Instalaciones
    public goToVehicleInventory():void{
      this._router.navigate(['/inicio/recursos-humanos-materiales/inventario-vehicular']);
    }
    //Función para navegar a Instalaciones
    public goToActionActivity():void{
      this._router.navigate(['/inicio/recursos-humanos-materiales/bien-servicio']);
    }

}
