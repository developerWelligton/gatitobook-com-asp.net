import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { TokenService } from 'src/app/autenticacao/token.service';
import { Filme } from '../novo-filme/Filme';

@Injectable({
  providedIn: 'root'
})
export class AtualizarFilmeService {

  constructor(private http: HttpClient,private tokenService: TokenService) { }


  getFilmeId(id: any){
    const token = JSON.parse(this.tokenService.retornaToken());   
    return this.http.get<any>('http://localhost:5000/filme/'+id); 
  }
  updateFilmeId(filme: Filme){
    const token = JSON.parse(this.tokenService.retornaToken());  
    return this.http.put('http://localhost:5000/filme/'+ filme.id,filme); 
  }
}
