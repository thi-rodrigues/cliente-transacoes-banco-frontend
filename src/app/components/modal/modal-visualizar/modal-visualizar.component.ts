import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Agencia } from 'src/app/model/agencia';
import { Cliente } from 'src/app/model/cliente';
import { Conta } from 'src/app/model/conta';

@Component({
  selector: 'app-modal-visualizar',
  templateUrl: './modal-visualizar.component.html',
  styleUrls: ['./modal-visualizar.component.scss']
})
export class ModalVisualizarComponent implements OnInit {

  clienteForm!: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    let cliente: Cliente = JSON.parse(localStorage.getItem('cliente') as string);
    this.addCliente(cliente);
  }

  addCliente(cliente: Cliente) {
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

  formatDate(dtNascimento: Date): number {
    return new Date().getFullYear() - new Date(dtNascimento).getFullYear();
  }

}
