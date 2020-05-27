import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PrincipalComponent } from './principal/principal.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { DireccionComponent } from './direccion/direccion.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { TiendaComponent } from './tienda/tienda.component';
import {FormsModule} from '@angular/forms'
import { PipsPipe } from './pipes/pips.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    PromocionesComponent,
    DireccionComponent,
    FiltrosComponent,
    TrabajoComponent,
    TiendaComponent,
    PipsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
