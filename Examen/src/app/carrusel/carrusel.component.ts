import {Component, Input, OnInit} from '@angular/core';
import {InputText} from "primeng/primeng";

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

@Input() SO: string;




  constructor() { }

  ngOnInit() {
  }
  // class SistemaOperativoCarrusel {
  // constructor(public nombreSOC: string,
  //             public versionSOC: number,
  //             public fechaSOC: string,
  //             public pesoSOC: number,
  //             public instaladoSOC: boolean) {
  //
  // }
}
