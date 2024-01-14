import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layout/principal/principal.component';
import { SegurosComponent } from './layout/seguros/seguros.component';
import { CotizacionComponent } from './layout/cotizacion/cotizacion.component';


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'detalle/:id',
    component: PrincipalComponent
  },
  {
    path: 'seguros',
    component: SegurosComponent
  },
  {
    path: 'cotizacion',
    component: CotizacionComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
