import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit{
  user$ = this.usuarioService.retornaUsuario();
  role$: any;
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  
  ngOnInit(): void {
    this.usuarioService.retornaUsuarioRole().subscribe(r =>{ this.role$ = r}); 
  }
 

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
