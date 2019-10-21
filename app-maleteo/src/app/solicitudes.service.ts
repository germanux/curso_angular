import { Injectable } from '@angular/core';
import { Solicitud } from './modelo/Solicitud';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SolicitudesService {
  urlApiRest = "https://httpbin.org/post";
  httpOpciones = {
    headers: new HttpHeaders({
      'Content-Type': "application/x-www-form-urlencoded"
    })
  }
  constructor(private srvHttp: HttpClient) {

   }

  enviar(solicitud: Solicitud) : void {
    let obsRespuesta: Observable<any>;
    obsRespuesta = this.srvHttp.post(this.urlApiRest, solicitud, this.httpOpciones);
    obsRespuesta.subscribe((resp) => {
      alert(resp);
    });
  }
}
