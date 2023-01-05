import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formularioFilme = this.formBuilder.group({
      titulo: ['', [Validators.required]], 
      diretor: ['', [Validators.required]], 
      genero: ['', [Validators.required]], 
      duracao: ['', [Validators.required]], 
      classificacaoEtaria: ['', [Validators.required]],   
    })
  }
  cadastrar() {
    this.spinner.show();
    if(this.formularioFilme.valid){ 
      const novoFilme = this.formularioFilme.getRawValue() as Filme;
      this.novoFilmeService.cadastraNovoFilme(novoFilme).subscribe(
        () => {
          alert("Filme criado")
          this.spinner.hide();
          this.router.navigate(['']);
        },
        (error:any) => {
          console.log(error);
          this.spinner.hide()
        }
      );
    }

      
     
  }
}
