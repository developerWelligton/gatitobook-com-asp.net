import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API_URL_USER= environment.API_URL_USER;


@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    console.log("OI")
    return this.http.post(`${API_URL_USER}/cadastro`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${API_URL_USER}/user/exists/${nomeUsuario}`);
  }
}
