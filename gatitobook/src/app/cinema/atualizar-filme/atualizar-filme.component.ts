import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Filme } from '../novo-filme/Filme';
import { AtualizarFilmeService } from './atualizar-filme.service';

@Component({
  selector: 'app-atualizar-filme',
  templateUrl: './atualizar-filme.component.html',
  styleUrls: ['./atualizar-filme.component.css']
})
export class AtualizarFilmeComponent implements OnInit {

  formularioAtualizaFilme!: FormGroup;
  submitted = false; 
  id:any;

  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any;

  constructor(private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private serviceAtualiza:AtualizarFilmeService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService) { }

  ngOnInit(): void {
      
    const filme = this.route.snapshot.data['filme']
    this.formularioAtualizaFilme = this.fb.group({
      id:[filme.id],
      titulo: [filme.titulo, [Validators.required]], 
      diretor: [filme.diretor, [Validators.required]], 
      genero: [filme.genero, [Validators.required]], 
      duracao: [filme.duracao, [Validators.required]], 
      classificacaoEtaria: [filme.classificacaoEtaria, [Validators.required]],   

    })
  }
   
  atualizar(){
    this.submitted = true;
    console.log(this.formularioAtualizaFilme.value)
    if(this.formularioAtualizaFilme.valid){ 
      this.serviceAtualiza.updateFilmeId(this.formularioAtualizaFilme.value).subscribe(
        success => {
          this.alertService.showAlert("Filme atualizado com sucesso!",AlertTypes.SUCCESS) 
          this.router.navigateByUrl("cinema/lista-filme")  
        
        },error => {this.alertService.showAlert("Filme não atualizado!",AlertTypes.DANGER) 
          
          this.router.navigateByUrl("cinema/lista-filme") 
        }
      );
    }
  }

  

  hasError(field: string){
    return this.formularioAtualizaFilme.get(field)?.errors;
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
