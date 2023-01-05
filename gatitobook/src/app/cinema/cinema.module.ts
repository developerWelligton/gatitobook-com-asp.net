import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaCinemaComponent, NovoFilmeComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CinemaModule { }
