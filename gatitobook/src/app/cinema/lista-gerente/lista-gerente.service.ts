import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';

@Injectable({
  providedIn: 'root'
})
export class ListaGerenteService {

  constructor( 
    private http: HttpClient,private tokenService: TokenService) { }

 
}
