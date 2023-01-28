import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Sessao } from '../novo-sessao/Sessao';
import { take } from 'rxjs/operators';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class AtualizarSessoesService {

  constructor(private http: HttpClient,private tokenService: TokenService) { }
  sessaoObj: Sessao | any;
  getSessaoId(id: any){
    const token = JSON.parse(this.tokenService.retornaToken());   
    return this.http.get<any>(`${API_URL_FILMES}/sessao/`+id); 
  }

  updateCinemaId(sessao: Sessao){

    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)  
    return this.http.put(`${API_URL_FILMES}/sessao/`+ sessao.Id,sessao,{headers:head_obj2}).pipe(take(1));
  }
}
