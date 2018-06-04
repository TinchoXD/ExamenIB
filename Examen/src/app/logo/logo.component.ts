import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
urlImagen = 'http://vevmo.com/sites/default/files/upload/logo_1.png';




  constructor() { }

  ngOnInit() {
  }

}
