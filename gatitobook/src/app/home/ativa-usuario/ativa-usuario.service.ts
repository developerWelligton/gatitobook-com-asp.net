import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResetUser } from './ResetUser';

const API_URL = environment.API_URL_USER; 

@Injectable({
  providedIn: 'root'
})
export class AtivaUsuarioService {

  constructor(private http:HttpClient) { }

  efetuaresetService(body: ResetUser){ 
    return this.http.post(`${API_URL}/efetua-reset`, body); 
  }
}
