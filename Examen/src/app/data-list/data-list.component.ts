import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Detalle} from '../app.component';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})


export class DataListComponent implements OnInit {

  @Input() detalles: Detalle[];

  @Output() dioClickEnFila: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  hizoClickEnFila(detalleId) {
    this.dioClickEnFila.emit(detalleId);
  }
}
