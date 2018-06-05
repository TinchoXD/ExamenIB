import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() indice: number;
  @Input() NombreSO: string;
  @Input() VersionApi: number;
  @Input() FechaLanzamiento: string;
  @Input() PesoGigas: number;
  @Input() EstadoInstalacion: boolean;

  @Output() clicListado: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

  }
  clicListadoF(indice) {
    this.clicListado.emit(indice);
    console.log(this.NombreSO)
    console.log(this.VersionApi)
    console.log(this.FechaLanzamiento)
    console.log(indice);
  }


}
