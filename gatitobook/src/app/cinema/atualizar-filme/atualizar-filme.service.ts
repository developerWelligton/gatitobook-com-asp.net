import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Filme } from '../novo-filme/Filme';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class AtualizarFilmeService {

  constructor(private http: HttpClient,private tokenService: TokenService) { }


  getFilmeId(id: any){
    const token = JSON.parse(this.tokenService.retornaToken());   
    return this.http.get<any>(`${API_URL_FILMES}/filme/`+id); 
  }
  updateFilmeId(filme: Filme){
    const token = JSON.parse(this.tokenService.retornaToken());  
    return this.http.put(`${API_URL_FILMES}/filme/`+ filme.id,filme); 
  }
}
