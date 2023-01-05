import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { Filme } from '../novo-filme/Filme';

@Injectable({
  providedIn: 'root'
})
export class ListaFilmeService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }

  retornaFilmes():Observable<Filme[]>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<Filme[]>('http://localhost:5000/filme',{headers:head_obj2}); 
   
  }
}
