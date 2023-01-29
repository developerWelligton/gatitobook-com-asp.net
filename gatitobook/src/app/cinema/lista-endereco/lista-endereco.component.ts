import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Endereco } from '../novo-endereco/Endereco';
import { ListaEnderecoService } from './lista-endereco.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {

  endereco$: Observable<Endereco[]> | undefined 
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;
  enderecoSelecionado:Endereco | undefined  

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

  OnDelete(endereco:Endereco){ 
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'})
    this.enderecoSelecionado = endereco;  
  }

  OnConfirmDelete(){  
    this.listaEnderecoService.remove(this.enderecoSelecionado?.id).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.deleteModalRef?.hide(); 
  }
  
  OnDeclineDelete(){
    this.deleteModalRef?.hide(); 
  }

  OnRefresh(){
    this.alertService.showAlert("Endereço deletado",AlertTypes.SUCCESS)
     this.endereco$ = this.listaEnderecoService.retornaEnderecos().pipe(
      catchError(error => {
        console.error(error);
        this.handlerError();
        return empty();
      })
    )
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar endereço!")
  }
   
 onEdit(id:Endereco){  
  this.router.navigate(['endereco',id],{relativeTo:this.route});
 } 

}

