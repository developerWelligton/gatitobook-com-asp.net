import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivaUsuarioComponent } from './ativa-usuario/ativa-usuario.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { RedefinicaoSenhaUsuarioComponent } from './redefinicao-senha-usuario/redefinicao-senha-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      },
      {
        path: 'ativausuario',
        component: AtivaUsuarioComponent,
      },
      {
        path: 'redefinicaosenhausuario',
        component: RedefinicaoSenhaUsuarioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
