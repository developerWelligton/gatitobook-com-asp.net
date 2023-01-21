import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Gerente } from '../novo-gerente/Gerente';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class ListaGerenteService { 

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }

 
  retornaGerentes():Observable<Gerente[]>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<Gerente[]>(`${API_URL_FILMES}/gerente`,{headers:head_obj2}); 
   
  }
  remove(id: Int16Array){
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.delete(`${API_URL_FILMES}/gerente/`+id,{headers:head_obj2}).pipe(take(1));
  }
}
