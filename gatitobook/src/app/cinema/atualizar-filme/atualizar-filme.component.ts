import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-filme',
  templateUrl: './atualizar-filme.component.html',
  styleUrls: ['./atualizar-filme.component.css']
})
export class AtualizarFilmeComponent implements OnInit {

  formularioAtualizaFilme!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioAtualizaFilme = this.fb.group({
      id:[''],
      titulo: ['', [Validators.required]], 
      diretor: ['', [Validators.required]], 
      genero: ['', [Validators.required]], 
      duracao: ['', [Validators.required]], 
      classificacaoEtaria: ['', [Validators.required]],   

    })
  }
  atualizar(){
    this.submitted = true;
    console.log(this.formularioAtualizaFilme.value)
    if(this.formularioAtualizaFilme.valid){
      console.log("Enviado")
    }
  }

  cancelar(){
    this.submitted = false;
    this.formularioAtualizaFilme.reset();
    console.log("Enviado")
  }

  hasError(field: string){
    return this.formularioAtualizaFilme.get(field)?.errors;
  }
}
