import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { AtualizarGerenteService } from './atualizar-gerente.service';

@Component({
  selector: 'app-atualizar-gerente',
  templateUrl: './atualizar-gerente.component.html',
  styleUrls: ['./atualizar-gerente.component.css']
})
export class AtualizarGerenteComponent implements OnInit {
  formularioGerenteFilme!: FormGroup;
  submitted = false; 
  id:any;

  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any;

  constructor(private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private serviceGerenteAtualiza:AtualizarGerenteService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService) { }

  ngOnInit(): void {
    const gerente = this.route.snapshot.data['gerente']
    this.formularioGerenteFilme = this.fb.group({ 
      nome: [gerente.nome, [Validators.required]],
      id: [gerente.id, [Validators.required]],  
    })
  }

  atualizar(){
    this.submitted = true;
    console.log(this.formularioGerenteFilme.value)
    if(this.formularioGerenteFilme.valid){ 
      this.serviceGerenteAtualiza.updateGerenteId(this.formularioGerenteFilme.value).subscribe(
        success => {
          this.alertService.showAlert("Gerente atualizado com sucesso!",AlertTypes.SUCCESS) 
          this.router.navigateByUrl("cinema/lista-gerente")  
        
        },error => {this.alertService.showAlert("Gerente não atualizado!",AlertTypes.DANGER) 
          
          this.router.navigateByUrl("cinema/lista-gerente") 
        }
      );
    }
  }

  

  hasError(field: string){
    return this.formularioGerenteFilme.get(field)?.errors;
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
