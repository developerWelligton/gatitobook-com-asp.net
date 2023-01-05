import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import { Filme } from './Filme';

@Injectable({
  providedIn: 'root'
})
export class NovoFilmeService { 

  constructor(private http: HttpClient,
    private tokenService: TokenService) {}
    
      
  cadastraNovoFilme(novoFilme: Filme){
    const token = JSON.parse(this.tokenService.retornaToken());

  let head_obj= new HttpHeaders().set("Authorization","bearer "+token)
    
    
    return this.http.post('http://localhost:5000/filme', novoFilme, {headers:head_obj}); 
  }
}
 