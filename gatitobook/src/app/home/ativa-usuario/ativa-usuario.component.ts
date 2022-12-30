import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AtivaUsuarioService } from './ativa-usuario.service';

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
      url:['']
    })
  }

  ativarCadastro(){
    const ativaNovoUsuario = this.ativaUsuarioForm.getRawValue() as string;
     this.ativaNovoUsuarioService.AtivaNovoUsuario(ativaNovoUsuario).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['']);
     },
     (error)=>{
      console.log(error)
     }
     )
  }
}
