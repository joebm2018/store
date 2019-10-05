import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms'
import{ RUTAS } from '../app/app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { MonedaPipe } from './pipes/moneda.pipe';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { PrimeraLetraMayusculaPipe } from './pipes/primera-letra-mayuscula.pipe';
import { CarritoComponent } from './components/carrito/carrito.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    MonedaPipe,
    CambiarMonedaComponent,
    PrimeraLetraMayusculaPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
