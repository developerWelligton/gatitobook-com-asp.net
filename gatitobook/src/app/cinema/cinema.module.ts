import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeCinemaComponent } from './home-cinema/home-cinema.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';


@NgModule({
  declarations: [HomeCinemaComponent, NovoFilmeComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CinemaModule { }
