import { Component, OnInit, ViewChild ,TemplateRef} from '@angular/core';
import { Filme } from '../novo-filme/Filme';
import { ListaFilmeService } from './lista-filme.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  filmes$: Observable<Filme[]> | undefined 
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal:any;

  filmeSelecionado:Filme | undefined
  alertService: any;

  //alert
   openSuccess: boolean = false;
   openDanger: boolean = false;
   dismissible: boolean = true;
   timeout: number = 7000;

  constructor(private listafilmeService: ListaFilmeService,
    private modalService: BsModalService) {  
    }

  ngOnInit(): void {
      this.filmes$ = this.listafilmeService.retornaFilmes();
  }
   

  OnDelete(filme:Filme){
    console.log(filme)
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'})
    this.filmeSelecionado = filme;
  }

  OnConfirmDelete(){
    this.listafilmeService.remove(this.filmeSelecionado?.id).subscribe(  
      success => this.OnRefresh(),
      error => this.handlerError()
    );
    this.deleteModalRef?.hide();
    this.openSuccess = true;
  }
  
  OnDeclineDelete(){
    this.deleteModalRef?.hide();
    this.openDanger = true;
  }

  OnRefresh(){
     this.filmes$ = this.listafilmeService.retornaFilmes().pipe(
      catchError(error => {
        console.error(error);
        this.handlerError();
        return empty();
      })
    )
  }
  handlerError() {
    this.alertService.showAlertDanger("Erro ao carregar filmes!")
  }
  
  log(alert:any){
    console.log('alert message closed');
 }
   
}
