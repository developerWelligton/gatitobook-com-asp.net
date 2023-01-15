import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators'; 
import { TokenMessage } from './TokenMessage';
import { environment } from 'src/environments/environment';

const API_URL_USER = environment.API_URL_USER;
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
   tk: TokenMessage | undefined
   authToken: string | undefined;
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}
 
   
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    
    return this.httpClient
      .post(
         `${API_URL_USER}/login`,
        {
          Username: usuario,
          Password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {

         this.tk = JSON.parse(JSON.stringify(res.body));
         this.authToken = JSON.stringify(this.tk?.message); 
         console.log(this.authToken)
        this.usuarioService.salvaToken(this.authToken)
        })
      );
  }
}
