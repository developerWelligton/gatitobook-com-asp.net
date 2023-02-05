import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeCinemaComponent } from './home-cinema/home-cinema.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { MensagemModule } from "../componentes/mensagem/mensagem.module";
import { AlertModule } from 'ngx-bootstrap/alert';
import { AtualizarFilmeComponent } from './atualizar-filme/atualizar-filme.component';
import { FilmeResolver } from './guards/filmeResolver';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListaGerenteComponent } from './lista-gerente/lista-gerente.component';
import { NovoGerenteComponent } from './novo-gerente/novo-gerente.component';
import { AtualizarGerenteComponent } from './atualizar-gerente/atualizar-gerente.component';
import { ListaEnderecoComponent } from './lista-endereco/lista-endereco.component';
import { NovoEnderecoComponent } from './novo-endereco/novo-endereco.component';
import { AtualizarEnderecoComponent } from './atualizar-endereco/atualizar-endereco.component';
import { NovoCinemaComponent } from './novo-cinema/novo-cinema.component';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';
import { AtualizarCinemaComponent } from './atualizar-cinema/atualizar-cinema.component';
import { NovoSessaoComponent } from './novo-sessao/novo-sessao.component';
import { ListaSessaoComponent } from './lista-sessao/lista-sessao.component';
import { AtualizarSessoesComponent } from './atualizar-sessoes/atualizar-sessoes.component';
import { GraficoFilmeComponent } from './grafico-filme/grafico-filme.component'; 
import { NgChartjsModule } from 'ng-chartjs';
import { SessaoAdquiridaComponent } from './componentes/sessaoAdquirida/sessao-adquirida/sessao-adquirida.component';
import { GraficoSessaoComponent } from './grafico-sessao/grafico-sessao.component'; 
 
 


@NgModule({
    declarations: [HomeCinemaComponent, NovoFilmeComponent, ListaFilmeComponent, AtualizarFilmeComponent, ListaGerenteComponent, NovoGerenteComponent, AtualizarGerenteComponent, ListaEnderecoComponent, NovoEnderecoComponent, AtualizarEnderecoComponent, NovoCinemaComponent, ListaCinemaComponent, AtualizarCinemaComponent, NovoSessaoComponent, ListaSessaoComponent, AtualizarSessoesComponent, GraficoFilmeComponent, SessaoAdquiridaComponent, GraficoSessaoComponent ],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemModule,
        AlertModule,
        NgxPaginationModule, 
        NgChartjsModule,
    
    ],
    providers:[
        FilmeResolver
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CinemaModule { }
