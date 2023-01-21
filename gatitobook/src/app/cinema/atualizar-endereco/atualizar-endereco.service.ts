import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Endereco } from '../novo-endereco/Endereco';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class AtualizarEnderecoService {

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  getEnderecoId(id: any){
    const token = JSON.parse(this.tokenService.retornaToken());   
    return this.http.get<any>(`${API_URL_FILMES}/endereco/`+id); 
  }

  updateEnderecoId(endereco: Endereco){

    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)   
    return this.http.put(`${API_URL_FILMES}/endereco/`+ endereco.id,endereco,{headers:head_obj2}).pipe(take(1));
  }
}
