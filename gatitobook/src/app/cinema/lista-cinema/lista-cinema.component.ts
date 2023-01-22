import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Cinema } from '../novo-cinema/Cinema';
import { Cinemas } from './lista-cinema.interface';
import { ListaCinemaService } from './lista-cinema.service';

@Component({
  selector: 'app-lista-cinema',
  templateUrl: './lista-cinema.component.html',
  styleUrls: ['./lista-cinema.component.css']
})
export class ListaCinemaComponent implements OnInit {

  
  cinema$: Observable<Cinemas[]> | undefined 
  public cinemas!: Cinemas[]

  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;
  cinemaSelecionado:Cinemas | undefined 

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
  }
 
  OnDelete(cinema:Cinemas){ 
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'})
    this.cinemaSelecionado = cinema;  
  }

  OnConfirmDelete(){  
    this.listaCinemaService.remove(this.cinemaSelecionado?.id).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.deleteModalRef?.hide(); 
  }
  
  OnDeclineDelete(){
    this.deleteModalRef?.hide(); 
  }

  OnRefresh(){
    this.alertService.showAlert("Cinema deletado",AlertTypes.SUCCESS)
     this.cinema$ = this.listaCinemaService.retornaCinemas().pipe(
      catchError(error => {
        console.error(error);
        this.handlerError();
        return empty();
      })
    )
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar cinema!")
  }
   
  onEdit(id:any){  
    this.router.navigate(['cinema',id],{relativeTo:this.route});
   } 
 

}
