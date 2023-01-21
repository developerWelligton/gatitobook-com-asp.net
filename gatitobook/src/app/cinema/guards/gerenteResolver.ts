import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AtualizarGerenteService } from "../atualizar-gerente/atualizar-gerente.service";
 

 

@Injectable({ providedIn: 'root' })
export class GerenteResolver implements Resolve<any> {
  constructor(private atualizaGerenteService: AtualizarGerenteService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   if(route.params && route.params['id']){
    return this.atualizaGerenteService.getGerenteId(route.params['id'])
   }
     
  }
}