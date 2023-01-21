import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Gerente } from '../novo-gerente/Gerente';
import { ListaGerenteService } from './lista-gerente.service';

@Component({
  selector: 'app-lista-gerente',
  templateUrl: './lista-gerente.component.html',
  styleUrls: ['./lista-gerente.component.css']
})
export class ListaGerenteComponent implements OnInit {

  Gerente$: Observable<Gerente[]> | undefined
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;
  gerenteSelecionado:Gerente | undefined 

  

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

  OnDelete(gerente:Gerente){
    console.log(gerente)
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'})
    this.gerenteSelecionado = gerente; 
  }

  OnConfirmDelete(){ 
    this.listaGerenteService.remove(this.gerenteSelecionado?.id).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.deleteModalRef?.hide(); 
  }
  
  OnDeclineDelete(){
    this.deleteModalRef?.hide(); 
  }

  OnRefresh(){
    this.alertService.showAlert("Gerente deletado",AlertTypes.SUCCESS)
     
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar gerente!")
  }
   
 onEdit(id:Gerente){ 
  alert("ID GERENTE" + id)
 }

   

}
