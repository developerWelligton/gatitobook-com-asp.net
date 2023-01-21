import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from '../autenticacao/autenticacao.guard';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component'; 
import { AtualizarGerenteComponent } from './atualizar-gerente/atualizar-gerente.component';
import { FilmeResolver } from './guards/filmeResolver';
import { GerenteResolver } from './guards/gerenteResolver';
 
import { HomeCinemaComponent } from './home-cinema/home-cinema.component';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { ListaGerenteComponent } from './lista-gerente/lista-gerente.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';
import { NovoGerenteComponent } from './novo-gerente/novo-gerente.component';

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
    },
    canActivate:[AutenticacaoGuard],
    data:{permittedRoles:['admin']}
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

  {
    path: 'lista-gerente',
    component: ListaGerenteComponent
  },
  {
    path: 'novo-gerente',
    component: NovoGerenteComponent
  }, 
  {
    path: 'lista-gerente/gerente/:id',
    component: AtualizarGerenteComponent,
    resolve:{
      gerente:GerenteResolver
    } 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
