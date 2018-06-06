import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {SistemaOperativo} from '../app.component';



@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})


export class DataListComponent implements OnInit {

  @Input() sistemaOperativo: SistemaOperativo[];

  @Output() dioClickEnFila: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  hizoClickEnFila(sistemaID) {
    this.dioClickEnFila.emit(sistemaID);
  }
}
