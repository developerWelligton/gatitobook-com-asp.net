import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { Cinemas } from '../lista-cinema/lista-cinema.interface';
import { ListaCinemaService } from '../lista-cinema/lista-cinema.service';
import { ListaFilmeService } from '../lista-filme/lista-filme.service';
import { Filme } from '../novo-filme/Filme';

@Component({
  selector: 'app-atualizar-sessoes',
  templateUrl: './atualizar-sessoes.component.html',
  styleUrls: ['./atualizar-sessoes.component.css']
})
export class AtualizarSessoesComponent implements OnInit { 
  formularioSessao!: FormGroup;
  submitted = false; 
  id:any;
  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any; 
     
  filme$: Observable<Filme[]> | undefined
  cinema$: Observable<Cinemas[]> | undefined

  filmeId: number | undefined;
  cinemaId: number | undefined;
  sessaoId: number | undefined;

  constructor(private formBuilder: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    //private atualizarSessaoService:AtualizarSessaoService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService,
    private listaFilmeService: ListaFilmeService,
    private listaCinemaService: ListaCinemaService) { }
 
 
  ngOnInit(): void {
    const sessao = this.route.snapshot.data['sessao'];
    this.filme$ = this.listaFilmeService.retornaFilmes(); 
    this.cinema$ = this.listaCinemaService.retornaCinemas();
    
    console.log(sessao)

    this.filmeId = sessao.filme.id;
    this.cinemaId = sessao.cinema.id; 

    this.formularioSessao = this.formBuilder.group({ 
      CinemaId: [this.cinemaId, [Validators.required]] ,
      FilmeId: [this.filmeId, [Validators.required]]    
    }) 
    
     
  }


  changeFilme(event:any) {
    console.log(event.target.value);
  }

  changeCinema(event:any) {
    console.log(event.target.value); 
  }
  
  OnUpdate(){  
    this.updateModalRef = this.modalService.show(this.updateModal,{class:'modal-sm'})
      //this.filmeSelecionado = filme;
    }
}
