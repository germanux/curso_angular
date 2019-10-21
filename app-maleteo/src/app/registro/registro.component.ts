import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../modelo/Solicitud';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevaSolicitud: Solicitud;
  politicaAcep: boolean;

  constructor() {
   }

  ngOnInit() {
    this.politicaAcep = true;
    this.nuevaSolicitud = new Solicitud("prueba", "", "", "");    
  }
  enviar() {
    // alert(this.nuevaSolicitud.getNombre());
    
  }
}
