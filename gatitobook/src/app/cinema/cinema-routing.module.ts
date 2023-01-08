import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';
import { FilmeResolver } from './guards/filmeResolver';
 
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
    resolve:{
      filme:FilmeResolver
    }
  },
  {
    path: 'lista-filme',
    component: ListaFilmeComponent,
  },
  {
    path: 'lista-filme/filme/:id',
    component: AtualizarFilmeComponent,
    resolve:{
      filme:FilmeResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
