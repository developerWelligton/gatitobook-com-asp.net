import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad, CanActivate {
  constructor(private usuarioService:UsuarioService, private router:Router){}
  
  
  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    let roles = next.data['permittedRoles'] as Array<string>;
    if(roles){
      if(this.usuarioService.roleMatch(roles)) {
        return true;
      }else{
        this.router.navigate(['cinema'])
        return false;
      }
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.usuarioService.estaLogado()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  } 

   
}
