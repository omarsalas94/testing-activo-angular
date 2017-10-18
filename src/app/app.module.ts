import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.rutas';

import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { ParametroNuevoComponent } from './componentes/parametro-nuevo/parametro-nuevo.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearTestComponent } from './componentes/crear-test/crear-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ParametroNuevoComponent,
    InicioComponent,
    CrearTestComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
