import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() sistmaOperativoID: number;
  @Input() pesoDetallengm: number;
  @Input() versionDetallengm: number;
  @Input() nombreDetallengm: string;
  @Input() urlDetallengm: string;
  @Input() dateDetallengm: string;
  @Input() costoDetallengm: number;
  @Input() idDetallengm: number;

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
    this.pesoDetallengm = 0;
    this.versionDetallengm = 0;
    this.nombreDetallengm = '';
    this.urlDetallengm = '';
    this.dateDetallengm = '';
    this.costoDetallengm = 0;
    this.idDetallengm = 0;
  }

  hizoClickEnBotonCrear() {

    const sistema = {
      sistmaOperativoID: this.sistmaOperativoID,
      pesoDetallengm: this.pesoDetallengm,
      versionDetallengm: this.versionDetallengm,
      nombreDetallengm: this.nombreDetallengm,
      urlDetallengm: this.urlDetallengm,
      dateDetallengm: this.dateDetallengm,
      costoDetallengm: this.costoDetallengm,
      idDetallengm: this.idDetallengm,

    };
    this.dioClickEnBotonCrear.emit(sistema);
  }

}
