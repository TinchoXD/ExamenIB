import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { EjerbotonComponent } from './ejerboton/ejerboton.component';
import { GrillaComponent } from './grilla/grilla.component';
import { SeparadorComponent } from './separador/separador.component';
import { LogoComponent } from './logo/logo.component';
import { TopUsadosComponent } from './top-usados/top-usados.component';
import { CarruselComponent } from './carrusel/carrusel.component';
// import { CabeceraComponent } from './cabecera/cabecera.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import 'hammerjs';
import {MatButtonModule, MatFormFieldModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { ListadoComponent } from './listado/listado.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetalleComponent } from './detalle/detalle.component';

import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { CartaComponent } from './carta/carta.component';                 // api

import {ButtonModule} from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';







@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    EjerbotonComponent,
    GrillaComponent,
    SeparadorComponent,
    LogoComponent,
    TopUsadosComponent,
    CarruselComponent,
    CabeceraComponent,
    ListadoComponent,
    DetalleComponent,
    CartaComponent,
    // CabeceraComponent
  ], // Definir todos los componentes a usarse
     // Definin todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    AccordionModule,
    ButtonModule,
    KeyFilterModule,
    // MenuItem

  ], //  Definimos todos los Modulos
  providers: [], // Los Servicios
  bootstrap: [AppComponent] // Componente Principal
})
// @ALGO() // Decorator


export class AppModule {
}
