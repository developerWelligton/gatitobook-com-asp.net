import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AtivaUsuarioService } from './ativa-usuario.service';
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
      email:[''],
      password:[''],
      repassword:[''],
      token:['']
    })
  }

  efetuareset(){
    const efetuaresetUsuario = this.ativaUsuarioForm.getRawValue() as ResetUser;
     this.ativaNovoUsuarioService.efetuaresetService(efetuaresetUsuario).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['']);
     },
     (error)=>{
      console.log(error)
     }
     )
  }
}
