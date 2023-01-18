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

  role: Usuario | undefined;
  autorizado: boolean | any;

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario); 
  }

  retornaUsuario() { 
    return this.usuarioSubject.asObservable(); 
  }
 

  //Role Admin
  retornaRoleAdmin(){
    let roleTeste = this.usuarioSubject.asObservable().subscribe(
      (r) => {
         
        if(r.role == "admin"){
          this.autorizado = true; 
        }else{
          this.autorizado = false;
        } 
      },
      (error:any) => {
        console.log(error); 
      }
    );
    return this.autorizado;   
  }

  //Role Regular
  retornaRoleRegular(){
    let roleTeste = this.usuarioSubject.asObservable().subscribe(
      (r) => { 
       console.log(r)
      },
      (error:any) => {
        console.log(error); 
      }
    ); 
  }
  //*
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
