import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetUser } from './ResetUser';

@Injectable({
  providedIn: 'root'
})
export class AtivaUsuarioService {

  constructor(private http:HttpClient) { }

  efetuaresetService(body: ResetUser){ 
    return this.http.post('http://localhost:7000/efetua-reset', body); 
  }
}
