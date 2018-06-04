import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor() { }
  clickGuardar() {
    alert('dio clic en guardar');
    // execute action
  }
  clickLimpiar(){
    alert('dio clic en limpiar');
    // execute action
  }
  ngOnInit() {
  }

}
