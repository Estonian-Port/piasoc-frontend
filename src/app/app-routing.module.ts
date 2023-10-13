import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layout/principal/principal.component';


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'detalle/:id',
    component: PrincipalComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
