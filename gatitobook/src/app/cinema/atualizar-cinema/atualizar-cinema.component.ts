import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { ListaEnderecoService } from '../lista-endereco/lista-endereco.service';
import { ListaGerenteComponent } from '../lista-gerente/lista-gerente.component';
import { ListaGerenteService } from '../lista-gerente/lista-gerente.service';
import { Endereco } from '../novo-endereco/Endereco';
import { Gerente } from '../novo-gerente/Gerente';
import { AtualizarCinemaService } from './atualizar-cinema.service';

@Component({
  selector: 'app-atualizar-cinema',
  templateUrl: './atualizar-cinema.component.html',
  styleUrls: ['./atualizar-cinema.component.css']
})
export class AtualizarCinemaComponent implements OnInit {

  formularioCinema!: FormGroup;
  submitted = false; 
  id:any;
  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any;
  endereco$: any;
  gerente$: any;

 
 

  constructor(private formBuilder: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private atualizarCinemaService:AtualizarCinemaService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService,
    private listaEnderecoService: ListaEnderecoService,
    private listaGerenteService: ListaGerenteService) { }

    ngOnInit(): void {  
      const cinema = this.route.snapshot.data['cinema']
      this.endereco$ = this.listaEnderecoService.retornaEnderecos(); 
      this.gerente$ = this.listaGerenteService.retornaGerentes();

      this.formularioCinema = this.formBuilder.group({
        Nome: [cinema.nome, [Validators.required]] ,
        EnderecoId: [cinema.endereco.id, [Validators.required]] ,
        GerenteId: [cinema.gerente.id, [Validators.required]]    
      }) 
    }

}
