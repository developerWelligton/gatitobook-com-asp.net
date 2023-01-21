import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { NovoFilmeService } from '../novo-filme/novo-filme.service';
import { Gerente } from './Gerente';
import { NovoGerenteService } from './novo-gerente.service';

@Component({
  selector: 'app-novo-gerente',
  templateUrl: './novo-gerente.component.html',
  styleUrls: ['./novo-gerente.component.css']
})
export class NovoGerenteComponent implements OnInit {

  formularioGerente!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private novoGerenteService: NovoGerenteService, 
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formularioGerente = this.formBuilder.group({
      nome: ['', [Validators.required]]    
    })
  }

  cadastrar() {
    console.error("teste")
    this.spinner.show();
    if(this.formularioGerente.valid){ 
      const novoGerente = this.formularioGerente.getRawValue() as Gerente;
      this.novoGerenteService.cadastraNovoGerente(novoGerente).subscribe(
        () => {
          this.alertService.showAlert("Filme cadastrado com sucesso!",AlertTypes.SUCCESS)
          this.spinner.hide(); 
          this.formularioGerente.reset()
        },
        (error:any) => {
          console.log(error);
          this.alertService.showAlert("Filme não cadastrado!",AlertTypes.DANGER)
          this.spinner.hide()
        }
      );
      
    } 
  }

}
