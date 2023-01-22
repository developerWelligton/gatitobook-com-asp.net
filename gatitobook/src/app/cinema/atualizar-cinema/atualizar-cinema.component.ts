import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { ListaEnderecoService } from '../lista-endereco/lista-endereco.service';
import { ListaGerenteComponent } from '../lista-gerente/lista-gerente.component';
import { ListaGerenteService } from '../lista-gerente/lista-gerente.service';
import { Endereco } from '../novo-endereco/Endereco';
import { Gerente } from '../novo-gerente/Gerente';
import { AtualizarCinemaService } from './atualizar-cinema.service';

@Component({
  selector: 'app-atualizar-cinema',
  templateUrl: './atualizar-cinema.component.html',
  styleUrls: ['./atualizar-cinema.component.css']
})
export class AtualizarCinemaComponent implements OnInit {

  formularioCinema!: FormGroup;
  submitted = false; 
  id:any;
  updateModalRef?: BsModalRef;
  @ViewChild('updateModal') updateModal:any; 

  endereco$:  Observable<Endereco[]> | undefined
  gerente$: Observable<Gerente[]> | undefined
  gerenteId: number | undefined;
  enderecoId: number | undefined;
 
 
 

  constructor(private formBuilder: FormBuilder, 
    private route:ActivatedRoute,
    private router: Router,
    private atualizarCinemaService:AtualizarCinemaService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private modalService:BsModalService,
    private listaEnderecoService: ListaEnderecoService,
    private listaGerenteService: ListaGerenteService) { }

    ngOnInit(): void {  
      const cinema = this.route.snapshot.data['cinema']
      this.endereco$ = this.listaEnderecoService.retornaEnderecos(); 
      this.gerente$ = this.listaGerenteService.retornaGerentes();
      this.gerenteId = cinema.gerente.id;
      this.enderecoId = cinema.endereco.id;
      this.formularioCinema = this.formBuilder.group({
        Nome: [cinema.nome, [Validators.required]] ,
        EnderecoId: [this.enderecoId, [Validators.required]] ,
        GerenteId: [this.gerenteId, [Validators.required]]    
      }) 
    }

OnUpdate(){  
  this.updateModalRef = this.modalService.show(this.updateModal,{class:'modal-sm'})
    //this.filmeSelecionado = filme;
  }

    changeEndereco(event:any) {
      console.log(event.target.value);
    }

    changeGerente(event:any) {
      console.log(event.target.value); 
    }

    OnConfirmUpdate(){ 
      this.atualizar();
      this.updateModalRef?.hide(); 
    }
    
    OnDeclineUpdate(){
      this.updateModalRef?.hide(); 
    } 

    atualizar(){
      this.submitted = true;
      console.log(this.formularioCinema.value)
      if(this.formularioCinema.valid){ 
        this.atualizarCinemaService.updateCinemaId(this.formularioCinema.value).subscribe(
          success => {
            this.alertService.showAlert("cinema atualizado com sucesso!",AlertTypes.SUCCESS) 
            this.router.navigateByUrl("cinema/lista-cinema")  
          
          },error => {this.alertService.showAlert("Cinema não atualizado!",AlertTypes.DANGER) 
            
            this.router.navigateByUrl("cinema/lista-cinema") 
          }
        );
      }
    }

    hasError(field: string){
      return this.formularioCinema.get(field)?.errors;
    }
}
