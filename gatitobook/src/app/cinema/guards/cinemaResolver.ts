import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AtualizarCinemaService } from "../atualizar-cinema/atualizar-cinema.service";
 
 
  
@Injectable({ providedIn: 'root' })

export class CinemaResolver implements Resolve<any> {
  constructor(private atualizaCinemaService: AtualizarCinemaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   if(route.params && route.params['id']){ 
    return this.atualizaCinemaService.getCinemaId(route.params['id'])
   }
     
  }
}