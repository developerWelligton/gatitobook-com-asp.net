import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';


@NgModule({
  declarations: [ListaCinemaComponent, NovoFilmeComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule { }
