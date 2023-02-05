import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from '../autenticacao/autenticacao.guard';
import { AtualizarCinemaComponent } from './atualizar-cinema/atualizar-cinema.component';
import { AtualizarEnderecoComponent } from './atualizar-endereco/atualizar-endereco.component';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component'; 
import { AtualizarGerenteComponent } from './atualizar-gerente/atualizar-gerente.component';
import { AtualizarSessoesComponent } from './atualizar-sessoes/atualizar-sessoes.component';
import { GraficoFilmeComponent } from './grafico-filme/grafico-filme.component';
import { GraficoSessaoComponent } from './grafico-sessao/grafico-sessao.component';
import { CinemaResolver } from './guards/cinemaResolver';
import { EnderecoResolver } from './guards/enderecoResolver';
import { FilmeResolver } from './guards/filmeResolver';
import { GerenteResolver } from './guards/gerenteResolver';
import { SessaoResolver } from './guards/sessaoResolver';
 
import { HomeCinemaComponent } from './home-cinema/home-cinema.component';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';
import { ListaEnderecoComponent } from './lista-endereco/lista-endereco.component';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { ListaGerenteComponent } from './lista-gerente/lista-gerente.component';
import { ListaSessaoComponent } from './lista-sessao/lista-sessao.component';
import { NovoCinemaComponent } from './novo-cinema/novo-cinema.component';
import { NovoEnderecoComponent } from './novo-endereco/novo-endereco.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';
import { NovoGerenteComponent } from './novo-gerente/novo-gerente.component';
import { NovoSessaoComponent } from './novo-sessao/novo-sessao.component';

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
    path: 'lista-endereco',
    component: ListaEnderecoComponent, 
  },
  {
    path: 'lista-cinema',
    component: ListaCinemaComponent, 
  },
  {
    path: 'lista-sessao',
    component: ListaSessaoComponent, 
  },
  {
    path: 'novo-gerente',
    component: NovoGerenteComponent
  }, 
  {
    path: 'novo-endereco',
    component: NovoEnderecoComponent
  },
  {
    path: 'novo-cinema',
    component: NovoCinemaComponent
  },
  {
    path: 'novo-sessao',
    component: NovoSessaoComponent
  },
  {
    path: 'lista-gerente/gerente/:id',
    component: AtualizarGerenteComponent,
    resolve:{
      gerente:GerenteResolver
    } 
  },
  {
    path: 'lista-endereco/endereco/:id',
    component: AtualizarEnderecoComponent,
    resolve:{
      endereco:EnderecoResolver
    } 
  },

  {
    path: 'lista-cinema/cinema/:id',
    component: AtualizarCinemaComponent,
    resolve:{
      cinema:CinemaResolver
    }  
  },
  {
    path: 'lista-sessao/sessao/:id',
    component: AtualizarSessoesComponent,
    resolve:{
      sessao:SessaoResolver
    }  
  },
  {
    path: 'lista-sessao/sessao/:id',
    component: AtualizarSessoesComponent,
    resolve:{
      sessao:SessaoResolver
    }  
  },
  {
    path: 'grafico-filme',
    component: GraficoFilmeComponent,
      
  },
  {
    path: 'grafico-sessao',
    component: GraficoSessaoComponent,
      
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
