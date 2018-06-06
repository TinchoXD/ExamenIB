import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() sistemaOperativoID: number;
  @Input() indice: number;
  @Input() NombreSO: string;
  @Input() VersionApi: number;
  @Input() FechaLanzamiento: string;
  @Input() PesoGigas: number;
  @Input() EstadoInstalacion: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
