import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtivaUsuarioService {

  constructor(private http:HttpClient) { }

  AtivaNovoUsuario(urlAtivacao: string){
    const re =urlAtivacao;
    const num = String(re).replace("a","b")
    
    console.log(num)
    return this.http.get(`http://localhost:6000/ativa/${urlAtivacao}`); 
  }
}
