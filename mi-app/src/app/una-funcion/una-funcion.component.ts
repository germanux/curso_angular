import { Component /*, OnInit, OnDestroy */} from '@angular/core';

@Component({
  selector: 'comp-una-funcion',
  templateUrl: './una-funcion.component.html',
  styleUrls: ['./una-funcion.component.css']
})
export class UnaFuncionComponent /* implements OnInit*/ {

  static contador: number = 0;

  titulo: string = "UnaFuncionComponent";
  datos: string[] = ["A 1", "B 2", "C 3", "D 4"];
  nombre: string;

  constructor() {
    UnaFuncionComponent.contador ++;
     // alert("Comp construido " + UnaFuncionComponent.contador);
    this.titulo += " nº " + UnaFuncionComponent.contador; 
   }

  ngOnInit() {
   // alert("Comp INIT");
  }
  mostrarDatos() {
    alert(this.titulo + ": " + this.nombre);
    this.nombre = this.nombre.toUpperCase();
  }
}
