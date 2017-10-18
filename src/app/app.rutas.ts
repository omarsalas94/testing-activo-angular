import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearTestComponent } from './componentes/crear-test/crear-test.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { ParametroNuevoComponent } from './componentes/parametro-nuevo/parametro-nuevo.component';

const app_rutas: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'crear_test', component: CrearTestComponent},
    { path: 'prueba', component: PruebaComponent},
    { path: 'parametro_nuevo', component: ParametroNuevoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_rutas/*,{useHash: true}*/);
