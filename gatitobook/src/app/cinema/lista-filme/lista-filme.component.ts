import { Component, OnInit, ViewChild ,TemplateRef} from '@angular/core';
import { Filme } from '../novo-filme/Filme';
import { ListaFilmeService } from './lista-filme.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {
  filmes!: Filme[];
  modalRef?: BsModalRef;
  message?: string;
  constructor(private listafilmeService: ListaFilmeService,
    private modalService: BsModalService) {  
    }

  ngOnInit(): void {
    this.listafilmeService.retornaFilmes().subscribe((dados) => {
      console.log(dados)
      this.filmes = dados
      
    }
    )
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
  
   
   
}
