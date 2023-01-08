import { NgModule } from '@angular/core';
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
 


@NgModule({
    declarations: [HomeCinemaComponent, NovoFilmeComponent, ListaFilmeComponent, AtualizarFilmeComponent],
    imports: [
        CommonModule,
        CinemaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemModule,
        AlertModule 
    ],
    providers:[
        FilmeResolver
    ]
})
export class CinemaModule { }
