import {Component} from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  mostrarHola = true;

  arregloNumeros = [1, 2, 3, 4, 5, 6];

  arregloPeliculas = [
    {
      nombrePelicula: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      urlImagen: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2018/03/tomb-raider-23.jpg?resize=1080%2C600&quality=100&ssl=1',
      esEstreno: true
    },
    {
      nombrePelicula: 'Maze Runner',
      descripcion: ' Newt, Minho, Teresa, Gally, Sarten, La Rata, Ava Paige',
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZzpfXtB7z9BRBC2OaJ_uY7m5TwcclPMumlnk5NUF_bX_JNsn',
      esEstreno: false
    },



  ];

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




