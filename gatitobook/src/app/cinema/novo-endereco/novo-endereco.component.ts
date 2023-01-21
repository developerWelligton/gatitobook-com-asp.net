import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/alert.service';
import { Endereco } from './Endereco';

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
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formularioEndereco = this.formBuilder.group({
      nome: ['', [Validators.required]]    
    })
  }

  cadastrar() {
    this.spinner.show();
    if(this.formularioEndereco.valid){ 
      const novoFilme = this.formularioEndereco.getRawValue() as Endereco;
      
    }
  }
}
