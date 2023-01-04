import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCinemaComponent } from './lista-cinema/lista-cinema.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCinemaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
