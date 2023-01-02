import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ativaSenhaIguaisValidator } from '../ativa-usuario/ativa-senha-iguais.validator';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { novoUsuarioSenhaIguaisValidator } from './novo-usuario-senha-iguais.validator';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteServive: UsuarioExisteService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]], 
        userName: [
          '',[Validators.required],
        ],
        password: ['',[Validators.required]],
        repassword: ['',[Validators.required]],
        dataNascimento:['',[Validators.required]]
      },
      {
        validators: [usuarioSenhaIguaisValidator,novoUsuarioSenhaIguaisValidator], 
      }
    );
  }

  cadastrar() {
    this.spinner.show();
    if(this.novoUsuarioForm.valid){ 
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          alert("Usuario criado, veja o token no seu email e envie para ativar")
          this.spinner.hide();
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
          this.spinner.hide()
        }
      );
    }

      
     
  }
}
