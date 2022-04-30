import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCafeComponent } from './cafes/lista-cafe/lista-cafe.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent},
  { path: 'lista-cafes', component: ListaCafeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
