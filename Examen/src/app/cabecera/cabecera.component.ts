import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() arregloSO: [any];
  nombrengm: string;
  versionngm: number;
  fechangm: string;
  pesongm: number;
  instaladongm: string;


  constructor() {
  }

  ngOnInit() {
  }

  guardar() {
    this.arregloSO.push(new SistemaOperativo(this.nombrengm, this.versionngm, this.fechangm, this.pesongm, this.instaladongm));
  }

  limpiar() {
    this.nombrengm = '';
    this.versionngm = 0;
    this.fechangm = '';
    this.pesongm = 0;
    this.instaladongm = 'No';
  }

}

class SistemaOperativo {
  constructor(public nombreSO: string, public versionSO: number, public fechaSO: string, public pesoSO, public instaladoSO: string) {

  }

}
