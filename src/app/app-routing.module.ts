import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import{PromocionesComponent} from './promociones/promociones.component';
import{TrabajoComponent} from './trabajo/trabajo.component';
import{TiendaComponent} from './tienda/tienda.component';


const routes: Routes = [
  {path :'principal',component:PrincipalComponent},
  {path:'promociones',component:PromocionesComponent},
  {path: 'trabajo',component:TrabajoComponent},
  {path: 'tienda',component:TiendaComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
