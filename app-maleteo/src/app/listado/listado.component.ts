import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../solicitudes.service';
import { Solicitud } from '../modelo/Solicitud';

@Component({
  selector: 'app-listado',
  // templateUrl: './listado.component.html',
  template: `
  <h2>Listado de solicitudes</h2>
  <ul>
    <li *ngFor="let solicitud of arraySolic">
      {{ solicitud.nombre | uppercase}} 
    </li>
  </ul>
  `,
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  arraySolic: Solicitud[];

  constructor(private srvSolic: SolicitudesService) { 
    this.arraySolic = new Array();
  }
  ngOnInit() {
    this.srvSolic.recibir().subscribe(
      (resp) => this.cuandoRecibimosElJSON(resp));
  }
  cuandoRecibimosElJSON(respuesta: any) { // Fun Callback
    this.arraySolic = respuesta;
    alert(this.arraySolic.length);
  }
}
