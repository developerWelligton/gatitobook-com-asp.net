import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCinemaComponent,
  },
  {
    path: 'novo-filme',
    component: NovoFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
