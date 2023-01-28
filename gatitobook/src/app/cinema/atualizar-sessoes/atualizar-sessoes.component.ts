import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Cinemas } from '../lista-cinema/lista-cinema.interface';
import { ListaCinemaService } from '../lista-cinema/lista-cinema.service';
import { ListaFilmeService } from '../lista-filme/lista-filme.service';
import { Filme } from '../novo-filme/Filme';
import { AtualizarSessoesService } from './atualizar-sessoes.service';

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

  role$: any;

  constructor(private formBuilder: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private atualizarSessoesService:AtualizarSessoesService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService,
    private listaFilmeService: ListaFilmeService,
    private listaCinemaService: ListaCinemaService,
    private usuarioService: UsuarioService) { }
 
 
  ngOnInit(): void {
    const sessao = this.route.snapshot.data['sessao'];
    this.filme$ = this.listaFilmeService.retornaFilmes(); 
    this.cinema$ = this.listaCinemaService.retornaCinemas();

    this.usuarioService.retornaUsuarioRole().subscribe(r =>{ this.role$ = r}); 
    
    console.log(sessao)

    this.filmeId = sessao.filme.id;
    this.cinemaId = sessao.cinema.id;
    this.sessaoId = sessao.Id;

    this.formularioSessao = this.formBuilder.group({ 
      Id: [sessao.id, [Validators.required]] ,
      CinemaId: [this.cinemaId, [Validators.required]] ,
      FilmeId: [this.filmeId, [Validators.required]]    
    })  
  }
  atualizar(){
    this.submitted = true;
    console.log(this.formularioSessao.value)
    if(this.formularioSessao.valid){ 
      
      this.atualizarSessoesService.updateSessaoId(this.formularioSessao.value).subscribe(
        success => {
          this.alertService.showAlert("Sessão atualizado com sucesso!",AlertTypes.SUCCESS) 
          this.router.navigateByUrl("cinema/lista-sessao")  
        
        },error => {this.alertService.showAlert("Sessão não atualizado!",AlertTypes.DANGER) 
          
          this.router.navigateByUrl("cinema/lista-sessao") 
        }
      );
      
    }
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

    OnConfirmUpdate(){ 
      this.atualizar();
      this.updateModalRef?.hide(); 
    }
    
    OnDeclineUpdate(){
      this.updateModalRef?.hide(); 
    } 
}
