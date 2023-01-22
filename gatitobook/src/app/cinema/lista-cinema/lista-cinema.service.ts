import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { Cinema } from '../novo-cinema/Cinema';

const API_URL_FILMES = environment.API_URL_FILMES;

@Injectable({
  providedIn: 'root'
})
export class ListaCinemaService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }
 
  
  retornaCinemas():Observable<Cinema[]>{
    const token = JSON.parse(this.tokenService.retornaToken());  
    let head_obj2= new HttpHeaders().set("Authorization","bearer "+token)
    return this.http.get<Cinema[]>(`${API_URL_FILMES}/cinema`,{headers:head_obj2});  
  }

}
