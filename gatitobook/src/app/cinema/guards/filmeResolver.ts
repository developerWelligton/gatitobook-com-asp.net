import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AtualizarFilmeService } from "../atualizar-filme/atualizar-filme.service"; 

 

@Injectable({ providedIn: 'root' })
export class FilmeResolver implements Resolve<any> {
  constructor(private atualizaFilmesService: AtualizarFilmeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   if(route.params && route.params['id']){
    return this.atualizaFilmesService.getFilmeId(route.params['id'])
   }
     
  }
}