import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  title = 'app';



  arregloSO2 = [];

  SO = this.arregloSO2[0];

  mostrarHola = true;


  mostrarIndice(indice) {
    this.SO = this.arregloSO2[indice];
  }


  cargarDetalle(indice) {
    this.SO = this.arregloSO2[indice];
  }
  alertar(evento) {
    console.log('Evento: ', evento);
    alert('DIO CLIC EN ES ESTRENO!!!!!!!!!!!!!!!!');
  }

  // nombre = 'Adrian';
  // apellido = 'Eguez';
  // edad = 28;
  // sueldo = 3411234.13;
  // fechaNacimiento = new Date('1989-06-10');
  // nombreBoton = 'Cambiar color';
  // nombreClase = 'sa-titulo';
  // clase = 'papa';
  //
  // cambiarClaseDeTitulo() {
  //   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
  //   if (nombreClaseEsTitulo) {
  //     this.nombreClase = 'sa-subtitulo';
  //   } else {
  //     this.nombreClase = 'sa-titulo';
  //   }
  // }
  //
  // aplicarClase(valorInput: string) {
  //   this.nombreClase = valorInput;
  // }
}




