import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Ingressos } from 'src/app/cinema/lista-sessao/ingressoQuantidade';
import { SessaoAdquiridaService } from '../sessao-adquirida.service';
 
@Component({
  selector: 'app-sessao-adquirida',
  templateUrl: './sessao-adquirida.component.html',
  styleUrls: ['./sessao-adquirida.component.css']
})
export class SessaoAdquiridaComponent implements OnInit {
  ingressoMaisVendido$: Observable<Ingressos> | undefined  
  constructor(
    private sessaoAdquiridaService: SessaoAdquiridaService, 
    private usuarioService: UsuarioService ) {  
    }  
  ngOnInit(): void {
    this.ingressoMaisVendido$ = this.sessaoAdquiridaService.retornaIngressoQuantidade(); 
  } 

}
