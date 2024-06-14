import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agencia } from 'src/app/model/agencia';
import { Cliente } from 'src/app/model/cliente';
import { Conta } from 'src/app/model/conta';
import { ClienteService } from '../../cliente.service';
import { ClienteExtratoService } from './cliente-extrato.service';
import { TransacaoBancaria } from 'src/app/model/transacao-bancaria';

@Component({
  selector: 'app-cliente-extrato',
  templateUrl: './cliente-extrato.component.html',
  styleUrls: ['./cliente-extrato.component.scss']
})
export class ClienteExtratoComponent implements OnInit {

  clienteForm!: FormGroup;

  cliente: Cliente = new Cliente();
  transacaoBancaria: TransacaoBancaria[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private clienteExtratoService: ClienteExtratoService,
  ) { }

  ngOnInit(): void {
    let idCliente = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.buscarCliente(Number.parseInt(idCliente));
  }

  createForm(cliente: Cliente) {
    this.cliente.conta = new Conta(cliente.conta.numero);
    this.cliente.conta.agencia = new Agencia();

    this.cliente.id = cliente.id;
    this.cliente.nome = cliente.nome;
    this.cliente.email = cliente.email;
    this.cliente.dtNascimento = cliente.dtNascimento;
    this.cliente.conta.agencia.numero = cliente.conta.agencia.numero;
    this.cliente.conta.numero = cliente.conta.numero;
    this.cliente.conta.saldo = cliente.conta.saldo;
  }

  buscarCliente(idCliente: number) {
    this.clienteService.findClienteById(idCliente).subscribe(result => {
      let cliente: Cliente = result;
      this.createForm(cliente);
      console.log(result);
      this.buscarExtrato(idCliente);
      }, (error => {
        console.log(error);
      }));
  }

  buscarExtrato(idCliente: number) {
    this.clienteExtratoService.buscarExtrato(idCliente).subscribe(result => {
      console.log(result);
      this.transacaoBancaria = result;
      }, (error => {
        console.log(error);
      }));
  }

  formatDate(dtNascimento: Date): number {
    return new Date().getFullYear() - new Date(dtNascimento).getFullYear();
  }

}
