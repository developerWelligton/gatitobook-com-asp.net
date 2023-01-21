import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AtualizarEnderecoService } from "../atualizar-endereco/atualizar-endereco.service";
 
  
@Injectable({ providedIn: 'root' })

export class EnderecoResolver implements Resolve<any> {
  constructor(private atualizaEnderecoService: AtualizarEnderecoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   if(route.params && route.params['id']){
    return this.atualizaEnderecoService.getEnderecoId(route.params['id'])
   }
     
  }
}