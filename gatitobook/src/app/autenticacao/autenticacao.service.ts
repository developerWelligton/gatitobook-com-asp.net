import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}
 
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    
    return this.httpClient
      .post(
        'http://localhost:6010/login',
        {
          Username: usuario,
          Password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.body;
          console.log(authToken)
        })
      );
  }
}
