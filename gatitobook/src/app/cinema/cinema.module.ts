import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';


@NgModule({
  declarations: [ListaCinemaComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule { }
