import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Gerente } from '../novo-gerente/Gerente';
import { ListaGerenteService } from './lista-gerente.service';

@Component({
  selector: 'app-lista-gerente',
  templateUrl: './lista-gerente.component.html',
  styleUrls: ['./lista-gerente.component.css']
})
export class ListaGerenteComponent implements OnInit {
  Gerente$: Observable<Gerente[]> | undefined 

  constructor(
    private listaGerenteService: ListaGerenteService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private usuarioService: UsuarioService) {  
    }

    ngOnInit(): void {
      this.Gerente$ = this.listaGerenteService.retornaGerentes(); 
  }
   

}
