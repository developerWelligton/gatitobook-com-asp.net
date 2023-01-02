import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedefinicaoSenhaUsuarioServiceService {

  constructor(private http:HttpClient) { }

  solicitarResetService(email: string){ 
    return this.http.post('http://localhost:7000/solicita-reset', email); 
  }
}
