import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';
import { HomeCinemaComponent } from './home-cinema/home-cinema.component';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCinemaComponent,
  },
  {
    path: 'novo-filme',
    component: NovoFilmeComponent,
  },
  {
    path: 'lista-filme',
    component: ListaFilmeComponent,
  },
  {
    path: 'lista-filme/filme/:id',
    component: AtualizarFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
