import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Filme } from './Filme';
import { NovoFilmeService } from './novo-filme.service';

@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.css']
})
export class NovoFilmeComponent implements OnInit {
  formularioFilme!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private novoFilmeService: NovoFilmeService,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formularioFilme = this.formBuilder.group({
      titulo: ['', [Validators.required]], 
      diretor: ['', [Validators.required]], 
      genero: ['', [Validators.required]], 
      duracao: ['', [Validators.required,Validators.max(600),Validators.min(0)]], 
      classificacaoEtaria: ['', [Validators.required]],
      dataCriacao: ['', [Validators.required]]   
    })
  }
  cadastrar() { 
    this.spinner.show();
    if(this.formularioFilme.valid){ 
      const novoFilme = this.formularioFilme.getRawValue() as Filme;
      this.novoFilmeService.cadastraNovoFilme(novoFilme).subscribe(
        () => {
          this.alertService.showAlert("Filme cadastrado com sucesso!",AlertTypes.SUCCESS)
          this.spinner.hide(); 
          this.formularioFilme.reset()
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
