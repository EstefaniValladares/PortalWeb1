import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PromocionesComponent} from './promociones/promociones.component';
import { PrincipalComponent } from './principal/principal.component';
import{TrabajoComponent} from './trabajo/trabajo.component';
import{TiendaComponent} from './tienda/tienda.component';


const routes: Routes = [
  {path :'principal',component:PrincipalComponent},
  {path:'promociones',component:PromocionesComponent},
  {path: 'trabajo',component:TrabajoComponent},
  {path: 'tienda',component:TiendaComponent},
  {path:'**', component: PrincipalComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
