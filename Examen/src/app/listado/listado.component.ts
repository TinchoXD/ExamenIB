import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() NombreSO: string;
  @Input() VersionApi: number;
  @Input() FechaLanzamiento: string;
  @Input() PesoGigas: number;
  @Input() EstadoInstalacion: boolean;

  // SOlista = [
  //
  //   {textNombre: this.NombreSO, textInstaaldo: this.EstadoInstalacion, cols: 1, rows: 2, color: 'lightblue'},
  //   // {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
  //   // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   // {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
  //   // {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  //
  // ];

  constructor() {
  }

  ngOnInit() {

  }

}
