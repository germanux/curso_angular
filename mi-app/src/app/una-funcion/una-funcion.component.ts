import { Component /*, OnInit, OnDestroy */} from '@angular/core';
import { AlmacendatosService } from '../almacendatos.service';

@Component({
  selector: 'comp-una-funcion',
  templateUrl: './una-funcion.component.html',
  styleUrls: ['./una-funcion.component.css']
})
export class UnaFuncionComponent /* implements OnInit*/ {

  static contador: number = 0;

  titulo: string = "UnaFuncionComponent";
  nombre: string;
  datos: string[];
  //srvAlmacen: AlmacendatosService;

  constructor(private srvAlmacen: AlmacendatosService) {
    //this.srvAlmacen = srvAlmacen;
    this.datos = srvAlmacen.getDatos();
    fetch("https://pokeapi.co/api/v2/pokemon/4")
    .then((json) => {
      //alert(json.json());
      return json.json();
    }).then(json => {
      console.log(json);
    })
    UnaFuncionComponent.contador ++;
     // alert("Comp construido " + UnaFuncionComponent.contador);
    this.titulo += " nº " + UnaFuncionComponent.contador; 
   }

  ngOnInit() {
   // alert("Comp INIT");
   this.nombre = "";
  }
  mostrarDatos() {
    alert(this.titulo + ": " + this.nombre);
    this.nombre = this.nombre.toUpperCase();
  }
  anadirDatos() {
    this.srvAlmacen.anadirDatos(this.nombre);
  }
}
