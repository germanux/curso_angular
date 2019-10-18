import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlmacendatosService {

  private datos: string[] = ["A 1", "B 2", "C 3", "D 4"];

  constructor() { }

  anadirDatos(nombre: string): void {
    this.datos.push(nombre);
  }
  getDatos() : string[] {
    return this.datos;
  }
}
