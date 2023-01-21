import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';

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
}
