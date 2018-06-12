import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {


  sistemasOperativos = [
    {
      sistemaOperativoId: 1,
      nombre: 'win',
      versionApi: '3.5',
      fechaLanzamiento: '1960-01-01',
      pesoEnGigas: 10,
      instalado: true,
      aplicaciones: [
        {
          detalleId: 3,
          pesoEnGigas: 100,
          version: 1.0,
          nombre: 'paint',
          urlDescarga: 'paint.com',
          fechaLanzamiento: '1990',
          costo: 100,
          sistemaOperativoId: 1,
        },
        {
          detalleId: 7,
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
          detalleId: 8,
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

  sistemaOperativo = this.sistemasOperativos[0];
  detalle = this.sistemaOperativo.aplicaciones[0];

  getSistemaOperativo() {
    return this.sistemaOperativo;
  }


  mostrarIndice(indice) {
    this.sistemaOperativo = this.sistemasOperativos[indice];
  }

  alertarDioClickEnBotonCrear(sistemaOperativo) {
    this.sistemasOperativos.push(sistemaOperativo);
  }

  alertarPeliculaDioClickEnBotonCrear(detalle) {
    this.sistemaOperativo.aplicaciones.push(detalle);
  }

  alertarPeliculaDioClickEnFila(detalleId) {
    const aplicaciones = this.sistemaOperativo.aplicaciones.filter(person => person.detalleId === detalleId);

    if (aplicaciones == null)
      return;

    this.detalle = aplicaciones[0];
  }
}

export interface Cabecera {
  sistemaOperativoId: number;
  nombre: string;
  versionApi: number;
  fechaLanzamiento: string;
  pesoEnGigas: number;
  instalado: boolean;
  aplicaciones: Detalle[];
}

export interface Detalle {
  detalleId;
  pesoEnGigas;
  version;
  nombre;
  urlDescarga;
  fechaLanzamiento;
  costo;
  sistemaOperativoId;
}



