import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

  gerente$: Observable<Gerente[]> | undefined
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
      this.gerente$ = this.listaGerenteService.retornaGerentes(); 
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
     this.gerente$ = this.listaGerenteService.retornaGerentes().pipe(
      catchError(error => {
        console.error(error);
        this.handlerError();
        return empty();
      })
    )
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar gerente!")
  }
   
 onEdit(id:Gerente){ 
  this.router.navigate(['gerente',id],{relativeTo:this.route});
 }

   

}
