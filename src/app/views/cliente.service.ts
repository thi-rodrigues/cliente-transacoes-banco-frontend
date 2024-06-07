import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transacao } from '../model/transacao';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  baseUrl = environment.baseUri + "/cliente";

  constructor(
    private http: HttpClient
  ) { }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/save`, cliente);
  }

  findAllClientes(page: number) {
    return this.http.get<any>(`${this.baseUrl}/all?page=${page}`);
  }

  depositar(transacao: Transacao) {
    return this.http.post<any>(`${this.baseUrl}/depositar`, transacao);
  }

  debitar(transacao: Transacao) {
    return this.http.post<any>(`${this.baseUrl}/debitar`, transacao);
  }

}
