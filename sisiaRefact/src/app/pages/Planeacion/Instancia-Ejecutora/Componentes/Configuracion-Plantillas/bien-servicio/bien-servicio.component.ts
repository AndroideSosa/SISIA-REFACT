import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bien-servicio',
  templateUrl: './bien-servicio.component.html',
  styleUrls: ['./bien-servicio.component.css']
})
export class BienServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Se ejecuta bien o servicio")
  }

}
