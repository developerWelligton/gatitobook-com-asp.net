import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/alert.service';
import { NovoFilmeService } from '../novo-filme/novo-filme.service';
import { Gerente } from './Gerente';

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
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formularioGerente = this.formBuilder.group({
      nome: ['', [Validators.required]]    
    })
  }

  cadastrar() {
    this.spinner.show();
    if(this.formularioGerente.valid){ 
      const novoFilme = this.formularioGerente.getRawValue() as Gerente;
      
    } 
  }

}
