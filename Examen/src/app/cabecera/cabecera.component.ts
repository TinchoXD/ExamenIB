import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Input() arregloSO: any[];
  nombrengm: string;
  versionngm: number;
  fechangm: string;
  pesongm: number;
  instaladongm: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  guardar() {
    console.log(`${this.nombrengm}`);
    console.log(`${this.instaladongm}`);
    this.arregloSO.push(new SistemaOperativo(this.nombrengm, this.versionngm, this.fechangm, this.pesongm, this.instaladongm));
  }

  limpiar() {
    this.nombrengm = '';
    this.versionngm = 0;
    this.fechangm = '';
    this.pesongm = 0;
    this.instaladongm = false;
  }

}

class SistemaOperativo {
  constructor(public nombreSO: string,
              public versionSO: number,
              public fechaSO: string,
              public pesoSO: number,
              public instaladoSO: boolean) {

  }

}
