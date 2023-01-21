import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService, AlertTypes } from 'src/app/shared/alert.service';
import { Endereco } from './Endereco';
import { NovoEnderecoService } from './novo-endereco.service';

@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo-endereco.component.html',
  styleUrls: ['./novo-endereco.component.css']
})
export class NovoEnderecoComponent implements OnInit {

  formularioEndereco!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private novoEnderecoService: NovoEnderecoService, 
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formularioEndereco = this.formBuilder.group({
      logradouro: ['', [Validators.required]] ,
      bairro: ['', [Validators.required]] ,
      numero: ['', [Validators.required]]    
    })
  }

  cadastrar() {
    console.error("ERRO")
    this.spinner.show();
    if(this.formularioEndereco.valid){  
      const novoEndereco = this.formularioEndereco.getRawValue() as Endereco;
      this.novoEnderecoService.cadastraNovoEndereco(novoEndereco).subscribe(
        () => {
          this.alertService.showAlert("Filme cadastrado com sucesso!",AlertTypes.SUCCESS)
          this.spinner.hide(); 
          this.formularioEndereco.reset()
        },
        (error:any) => {
          console.log(error);
          this.alertService.showAlert("Endereço não cadastrado!",AlertTypes.DANGER)
          this.spinner.hide()
        }
      );
    }
  }
}
