import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos-humanos-materiales',
  templateUrl: './recursos-humanos-materiales.component.html',
  styleUrls: ['./recursos-humanos-materiales.component.css']
})
export class RecursosHumanosMaterialesComponent implements OnInit {
  //Declaración de variables
  public tabName: string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.activeTab(this._router.url);
  }

     //Función para controlar clases de Tabs
     public activeTab(url: string):void{
      switch(url) {
        case "/inicio/recursos-humanos-materiales/datos-instancia-ejecutora": { 
          this.tabName = "1";
          break; 
       };  
        case "/inicio/recursos-humanos-materiales/personal": { 
          this.tabName = "2";
          break; 
       };  
        case "/inicio/recursos-humanos-materiales/instalaciones": { 
          this.tabName = "3";
          break; 
        };
        case "/inicio/recursos-humanos-materiales/inventario-vehicular": { 
           this.tabName = "4";
           break; 
        }; 
        case "/inicio/recursos-humanos-materiales/bien-servicio": { 
          this.tabName = "5";
          break; 
       }; 
        default: { 
           break; 
        } 
     } 
    }


}
