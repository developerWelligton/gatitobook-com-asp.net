import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { AtivaUsuarioComponent } from './ativa-usuario/ativa-usuario.component';
import { RedefinicaoSenhaUsuarioComponent } from './redefinicao-senha-usuario/redefinicao-senha-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent, AtivaUsuarioComponent, RedefinicaoSenhaUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule, 
    NgxSpinnerModule 
  ],
  exports: [HomeComponent],
  
})
export class HomeModule {}
