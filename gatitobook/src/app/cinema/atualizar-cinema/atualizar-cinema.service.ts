import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
 
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Cinemas } from '../lista-cinema/lista-cinema.interface';
import { Cinema } from '../novo-cinema/Cinema';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class AtualizarCinemaService {
 

  constructor(private http: HttpClient,private tokenService: TokenService) { }

  getCinemaId(id: any){
    const token = JSON.parse(this.tokenService.retornaToken());   
    return this.http.get<any>(`${API_URL_FILMES}/cinema/`+id); 
  }

  updateCinemaId(cinema: Cinema){

    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token) 
    return this.http.put(`${API_URL_FILMES}/cinema/`+ cinema.Id,cinema,{headers:head_obj2}).pipe(take(1));
  }
}
