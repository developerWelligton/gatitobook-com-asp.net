import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ativaSenhaIguaisValidator } from './ativa-senha-iguais.validator';
import { AtivaUsuarioService } from './ativa-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { ResetUser } from './ResetUser';

@Component({
  selector: 'app-ativa-usuario',
  templateUrl: 'ativa-usuario.component.html',
  styleUrls: ['ativa-usuario.component.css']
})
export class AtivaUsuarioComponent implements OnInit {
  ativaUsuarioForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private ativaNovoUsuarioService:AtivaUsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.ativaUsuarioForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email] ],
      password:['',[Validators.required]],
      repassword:['',[Validators.required]],
      token:['',[Validators.required]]
    },
    {
      validators: [ativaSenhaIguaisValidator],
    })
  }

  efetuareset(){
    if(this.ativaUsuarioForm.valid){
      const efetuaresetUsuario = this.ativaUsuarioForm.getRawValue() as ResetUser;
      this.ativaNovoUsuarioService.efetuaresetService(efetuaresetUsuario).subscribe((res)=>{
       console.log(res)
       this.router.navigate(['']);
      },
      (error)=>{
       console.log(error)
      }
      )
    }else{
      alert("Dados invalidos")
    } 
  }
}
