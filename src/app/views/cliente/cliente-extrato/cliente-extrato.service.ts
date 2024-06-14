import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteExtratoService {

  baseUrl = environment.baseUri + "/transacao-bancaria";

  constructor(
    private http: HttpClient
  ) { }

  buscarExtrato(idCliente: number) {
    return this.http.get<any>(`${this.baseUrl}/${idCliente}`);
  }
}
