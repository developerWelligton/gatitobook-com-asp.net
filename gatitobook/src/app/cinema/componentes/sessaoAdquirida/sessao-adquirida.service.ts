import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Ingressos } from '../../lista-sessao/ingressoQuantidade';
const API_URL_FILMES = environment.API_URL_FILMES;
@Injectable({
  providedIn: 'root'
})
export class SessaoAdquiridaService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }

  retornaIngressoQuantidade():Observable<Ingressos>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<Ingressos>(`${API_URL_FILMES}/ingresso/sessao-mais-comprada`,{headers:head_obj2});  
  }

  retornaIngressoTotal():Observable<any>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<any>(`${API_URL_FILMES}/ingresso/ingresso-total`,{headers:head_obj2});  
  }
}
