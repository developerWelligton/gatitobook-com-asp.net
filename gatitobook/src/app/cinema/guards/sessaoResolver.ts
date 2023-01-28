import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs"; 
import { AtualizarSessoesService } from "../atualizar-sessoes/atualizar-sessoes.service";
 
 
  
@Injectable({ providedIn: 'root' })

export class SessaoResolver implements Resolve<any> {
  constructor(private atualizaSessoesService: AtualizarSessoesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   if(route.params && route.params['id']){ 
    return this.atualizaSessoesService.getSessaoId(route.params['id'])
   }
     
  }
}