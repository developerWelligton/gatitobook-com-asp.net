import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Sessao } from '../novo-sessao/Sessao';
import { Sessoes } from './lista-sessao.interface';
import { ListaSessaoService } from './lista-sessao.service';

@Component({
  selector: 'app-lista-sessao',
  templateUrl: './lista-sessao.component.html',
  styleUrls: ['./lista-sessao.component.css']
})
export class ListaSessaoComponent implements OnInit {

  sessao$: Observable<Sessoes[]> | undefined 
  public sessoes!: Sessoes[]

  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;
  sessaoSelecionado:Sessoes | undefined 

  constructor(
    private listaSessaoService: ListaSessaoService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private usuarioService: UsuarioService) {  
    }
  ngOnInit(): void {
    this.sessao$ = this.listaSessaoService.retornaSessoes();
    this.sessao$.subscribe(r => {
      console.log(r)
    })
    
  }

 

  OnConfirmDelete(){  
     
  }
}
