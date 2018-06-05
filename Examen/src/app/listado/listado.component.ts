import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado: [any];
  NombreSO: string;
  VersionApi: number;
  FechaLanzamiento: string;
  PesoGigas: number;
  EstadoInstalacion: boolean;

  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Eigth', cols: 1, rows: 2, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {

  }

}
