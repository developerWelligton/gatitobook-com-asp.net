import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Cinema } from './Cinema';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class NovoCinemaService {

  constructor(private http: HttpClient,
    private tokenService: TokenService) {}
    
    cadastraNovoCinema(novoCinema: Cinema){
      const token = JSON.parse(this.tokenService.retornaToken());
  
    let head_obj= new HttpHeaders().set("Authorization","bearer "+token)
      
      
      return this.http.post(`${API_URL_FILMES}/cinema`, novoCinema, {headers:head_obj}); 
    }
}
