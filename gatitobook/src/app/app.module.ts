import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    BrowserAnimationsModule, 
    NgxSpinnerModule,
    ModalModule.forRoot(),
    AlertModule
  ],
  providers: [BsModalService,AlertConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
