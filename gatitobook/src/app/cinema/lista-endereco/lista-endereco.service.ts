import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Endereco } from '../novo-endereco/Endereco';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class ListaEnderecoService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }
 
  
  retornaGerentes():Observable<Endereco[]>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<Endereco[]>(`${API_URL_FILMES}/endereco`,{headers:head_obj2}); 
   
  }
}
