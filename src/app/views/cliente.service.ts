import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

}
