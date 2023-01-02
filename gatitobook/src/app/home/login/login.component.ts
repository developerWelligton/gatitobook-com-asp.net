import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  login() {
    this.spinner.show();
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.spinner.hide();
        this.router.navigate(['animais']);
      },
      (error) => {
        this.spinner.hide();
        alert('Usuário ou senha inválido');
        console.log(error);
      }
    );
  }
}
