import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {


  arregloSO2 = [
    {
      sistemaOperativoId: 1,
      nombre: 'win',
      versionApi: '3.5',
      fechaLanzamiento: '1960-01-01',
      pesoEnGigas: 10,
      instalado: true,
      aplicaciones: [
        {
          pesoEnGigas: 100,
          version: 1.0,
          nombre: 'paint',
          urlDescarga: 'paint.com',
          fechaLanzamiento: '1990',
          costo: 100,
          sistemaOperativoId: 1,
        },
        {
          pesoEnGigas: 2,
          version: 1.3,
          nombre: 'word',
          urlDescarga: 'word.com',
          fechaLanzamiento: '1980',
          costo: 1000,
          sistemaOperativoId: 1,
        }
      ],
    },
    {
      sistemaOperativoId: 2,
      nombre: 'ubun',
      versionApi: '1,5',
      fechaLanzamiento: '1920-01-01',
      pesoEnGigas: 101,
      instalado: false,
      aplicaciones: [
        {
          pesoEnGigas: 11,
          version: 1.0,
          nombre: 'console',
          urlDescarga: 'console.com',
          fechaLanzamiento: '1970',
          costo: 101,
          sistemaOperativoId: 2,
        },
      ],
    },
  ];
  // arregloSO2 = [];

  SO = this.arregloSO2[0];

  aplicacion = this.SO.aplicaciones[0];

  mostrarHola = true;



  mostrarIndice(indice) {
    this.SO = this.arregloSO2[indice];
    this.aplicacion = this.SO.aplicaciones[0];
  }

  alertarPeliculaDioClickEnBotonCrear(SO) {
    this.SO.aplicaciones.push(SO);
  }

  cargarDetalle(indice) {
    this.SO = this.arregloSO2[indice];
    this.aplicacion = this.SO.aplicaciones[0];
  }

  alertar(evento) {
    console.log('Evento: ', evento);
    alert('DIO CLIC EN ES ESTRENO!!!!!!!!!!!!!!!!');
  }

  alertarSistemaDioClickEnFila(sistemaID) {
    const sistemas = this.SO.aplicaciones.filter(s => s.sistemaOperativoId === sistemaID);

    if (sistemas == null) {
      return;
    }
    this.aplicacion = sistemas[0];
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

export interface SistemaOperativo {
  sistemaOperativoId: number;
  nombre: string;
  versionApi: number;
  fechaLanzamiento: string;
  pesoEnGigas: number;
  instalado: boolean;
  aplicaciones: Aplicacion[];
}

export interface Aplicacion {
  pesoEnGigas: number;
  version: number;
  nombre: string;
  urlDescarga: string;
  fechaLanzamiento: string;
  costo: number;
  sistemaOperativoId: number;
}


