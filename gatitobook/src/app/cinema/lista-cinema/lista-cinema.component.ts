import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService } from 'src/app/shared/alert.service';
import { Cinema } from '../novo-cinema/Cinema';
import { ListaCinemaService } from './lista-cinema.service';

@Component({
  selector: 'app-lista-cinema',
  templateUrl: './lista-cinema.component.html',
  styleUrls: ['./lista-cinema.component.css']
})
export class ListaCinemaComponent implements OnInit {

  
  cinema$: Observable<Cinema[]> | undefined  

  constructor(
    private listaCinemaService: ListaCinemaService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private usuarioService: UsuarioService) {  
    }

  ngOnInit(): void { 
    this.cinema$ = this.listaCinemaService.retornaCinemas(); 
    console.log(this.cinema$.subscribe(r => {console.log(r)}))
  }

}
