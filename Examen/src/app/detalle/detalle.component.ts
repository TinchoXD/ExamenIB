import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() detalleId: number;
  @Input() pesoEnGigas: number;
  @Input() version: number;
  @Input() nombre: string;
  @Input() urlDescarga: string;
  @Input() fechaLanzamiento: string;
  @Input() costo: number;
  @Input() cabeceraId: number;

  @Output() dioClickEnBotonCrear: EventEmitter<any> = new EventEmitter();

  // @Input()

  constructor() {
  }

  clickGuardar() {
    // this.pesoDetallengm = ;
    // execute action
  }

  ngOnInit() {
  }

  hizoClickEnBotonLimpiar() {
    this.detalleId = 0;
    this.pesoEnGigas = 0;
    this.version = 0;
    this.nombre = '';
    this.urlDescarga = '';
    this.fechaLanzamiento = '';
    this.costo = 0;
    this.cabeceraId = 0;
  }

  hizoClickEnBotonCrear() {

    const detalle = {
      detalleId: this.detalleId,
      pesoEnGigas: this.pesoEnGigas,
      version: this.version,
      nombre: this.nombre,
      urlDescarga: this.urlDescarga,
      fechaLanzamiento: this.fechaLanzamiento,
      costo: this.costo,
      cabeceraId: this.cabeceraId,

    };
    this.dioClickEnBotonCrear.emit(detalle);
  }

}
