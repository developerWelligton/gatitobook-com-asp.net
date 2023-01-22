import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { AtualizarEnderecoService } from './atualizar-endereco.service';

@Component({
  selector: 'app-atualizar-endereco',
  templateUrl: './atualizar-endereco.component.html',
  styleUrls: ['./atualizar-endereco.component.css']
})
export class AtualizarEnderecoComponent implements OnInit {
  formularioEndereco!: FormGroup;
  submitted = false; 
  id:any;
  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any;

  constructor(private fb: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private atualizarEnderecoService:AtualizarEnderecoService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService) { }

    ngOnInit(): void {
      const endereco = this.route.snapshot.data['endereco']
      this.formularioEndereco= this.fb.group({ 
        logradouro: [endereco.logradouro, [Validators.required]],
        bairro: [endereco.bairro, [Validators.required]],
        numero: [endereco.numero, [Validators.required]],
        id: [endereco.id, [Validators.required]] 
      })
    }

    atualizar(){
      this.submitted = true;
      console.log(this.formularioEndereco.value)
      if(this.formularioEndereco.valid){ 
        this.atualizarEnderecoService.updateEnderecoId(this.formularioEndereco.value).subscribe(
          success => {
            this.alertService.showAlert("Endereço atualizado com sucesso!",AlertTypes.SUCCESS) 
            this.router.navigateByUrl("cinema/lista-endereco")  
          
          },error => {this.alertService.showAlert("Endereco não atualizado!",AlertTypes.DANGER) 
            
            this.router.navigateByUrl("cinema/lista-endereco") 
          }
        );
      }
    }
    
  hasError(field: string){
    return this.formularioEndereco.get(field)?.errors;
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

  changeEndereco(event:any) {
    console.log(event.target.value);
  }

  changeGerente(event:any) {
    console.log(event.target.value); 
  }
  

}
