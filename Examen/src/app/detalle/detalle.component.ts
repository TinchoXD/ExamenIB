import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pesoDetallengm: number;
  versionDetallengm: number;
  nombreDetallengm: string;
  urlDetallengm: string;
  dateDetallengm: string;
  costoDetallengm: number;
  idDetallengm: number;

  // @Input()

  constructor() { }
  clickGuardar() {
   // this.pesoDetallengm = ;
    // execute action
  }

  ngOnInit() {
  }
  limpiarDetalle() {
    this.pesoDetallengm = 0;
    this.versionDetallengm = 0;
    this.nombreDetallengm = '';
    this.urlDetallengm = '';
    this.dateDetallengm = '';
    this.costoDetallengm = 0;
    this.idDetallengm = 0;
  }
}
