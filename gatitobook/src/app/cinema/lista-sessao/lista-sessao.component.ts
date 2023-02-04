import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Sessao } from '../novo-sessao/Sessao';
import { Ingressos } from './ingressoQuantidade';
 
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
  sessaoSelecionado:Sessoes | any  
  role$: any; 
  sessaoId: string | any
  createModalRef?: BsModalRef;
  @ViewChild('createModal') createModal:any;  

  constructor(
    private listaSessaoService: ListaSessaoService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService:BsModalService,
    private usuarioService: UsuarioService ) {  
    } 
     ingresso$: Observable<Ingressos[]> | any
  ngOnInit(): void {
    this.sessao$ = this.listaSessaoService.retornaSessoes(); 
     
    this.usuarioService.retornaUsuarioRole().subscribe(r =>{ this.role$ = r}); 
  
   
  }

 
  

 

  OnDelete(sessao:Sessoes){
    console.log(sessao)
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'})
    this.sessaoSelecionado = sessao;
  }

  OnConfirmDelete(){
    this.listaSessaoService.remove(this.sessaoSelecionado?.id).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.deleteModalRef?.hide(); 
  }
  
  OnDeclineDelete(){
    this.deleteModalRef?.hide(); 
  }


  OnRefresh(){
    this.alertService.showAlert("Sessão deletada",AlertTypes.SUCCESS)
     this.sessao$ = this.listaSessaoService.retornaSessoes().pipe(
      catchError(error => {
        console.error(error);
        this.handlerError();
        return empty();
      })
    )
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar sessoes!")
  }

  onEdit(id:any){  
    this.router.navigate(['sessao',id],{relativeTo:this.route});
   } 

   OnCreate(idSessao: string){
   
    this.createModalRef = this.modalService.show(this.createModal,{class:'modal-sm'})
    this.sessaoId = idSessao
    
  }

  OnConfirmCreate(){
    let ingresso = { 
      sessaoId: this.sessaoId, 
    }; 
    this.listaSessaoService.cadastraIngresso(ingresso).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.createModalRef?.hide(); 
  }
  
  OnDeclineCreate(){
    this.createModalRef?.hide(); 
  }  
  
}
