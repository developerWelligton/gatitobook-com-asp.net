import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL_USER = environment.API_URL_USER; 

@Injectable({
  providedIn: 'root'
})
export class RedefinicaoSenhaUsuarioServiceService {

  constructor(private http:HttpClient) { }

  solicitarResetService(email: string){ 
    return this.http.post(`${API_URL_USER}/solicita-reset`, email); 
  }
}
