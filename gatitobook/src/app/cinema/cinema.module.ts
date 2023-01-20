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
 


@NgModule({
    declarations: [HomeCinemaComponent, NovoFilmeComponent, ListaFilmeComponent, AtualizarFilmeComponent, ListaGerenteComponent],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemModule,
        AlertModule,
        NgxPaginationModule 
        
    ],
    providers:[
        FilmeResolver
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CinemaModule { }
