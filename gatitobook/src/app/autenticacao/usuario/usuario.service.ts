import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  private usuarioRoleSubject = new BehaviorSubject<any>({});

  role: string | any;
  autorizado: boolean | any;

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken(); 
    const usuario = jwt_decode(token) as Usuario; 
    const payLoad = JSON.parse(window.atob(token.split(".")[1]));
    var userRole = payLoad['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; 
    this.role = userRole;
    alert(userRole)
    this.usuarioSubject.next(usuario); 
    this.usuarioRoleSubject.next(userRole)
  }

  retornaUsuario() { 
    return this.usuarioSubject.asObservable(); 
  }

  retornaUsuarioRole() { 
    
    return this.usuarioRoleSubject.asObservable(); 
  }
  
  roleMatch(allowedRoles: any[]): boolean {
    var isMatch = false;
    const token = this.tokenService.retornaToken();
    const payLoad = JSON.parse(window.atob(token.split(".")[1]));
    var userRole = payLoad['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']; 
    if(userRole == allowedRoles[0]){
      isMatch = true; 
    } else{
      isMatch = false;
      alert(isMatch + " Pagina não autorizada")
    } 
    return isMatch;
  }
   
  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
