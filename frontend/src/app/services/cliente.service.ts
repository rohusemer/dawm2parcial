import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../models/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_API = 'http://localhost:4000/api/cliente'
  
  clientes!: Cliente[];
  
  constructor(private http: HttpClient) { }

  getCliente() {
    return this.http.get<Cliente[]>(this.URL_API);
    
  }
}
