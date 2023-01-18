import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

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
         
        if(r.role == "regular"){
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
