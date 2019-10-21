import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../modelo/Solicitud';
import { SolicitudesService } from '../solicitudes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevaSolicitud: Solicitud;
  politicaAcep: boolean;

  constructor(private srvSolicitudes: SolicitudesService) {
   }

  ngOnInit() {
    this.politicaAcep = true;
    this.nuevaSolicitud = new Solicitud("prueba", "", "", "");    
  }
  enviar() {
    // alert(this.nuevaSolicitud.getNombre());
    this.srvSolicitudes.enviar(this.nuevaSolicitud);
  }
}
