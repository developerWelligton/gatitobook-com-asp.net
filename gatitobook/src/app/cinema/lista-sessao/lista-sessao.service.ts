import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Sessao } from '../novo-sessao/Sessao';
import { Sessoes } from './lista-sessao.interface';
const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class ListaSessaoService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }

    retornaSessoes():Observable<Sessoes[]>{
      const token = JSON.parse(this.tokenService.retornaToken());  
      let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
      return this.http.get<Sessoes[]>(`${API_URL_FILMES}/sessao`,{headers:head_obj2});  
    }
 
}
