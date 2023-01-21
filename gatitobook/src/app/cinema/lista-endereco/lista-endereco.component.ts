import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Endereco } from '../novo-endereco/Endereco';
import { ListaEnderecoService } from './lista-endereco.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {

  endereco$: Observable<Endereco[]> | undefined 

  constructor(
    private listaEnderecoService: ListaEnderecoService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private usuarioService: UsuarioService) {  
    }

  ngOnInit(): void { 
    this.endereco$ = this.listaEnderecoService.retornaEnderecos(); 
  }

}

