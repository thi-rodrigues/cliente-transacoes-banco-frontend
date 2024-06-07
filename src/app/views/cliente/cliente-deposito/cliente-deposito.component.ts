import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transacao } from 'src/app/model/transacao';

@Component({
  selector: 'app-cliente-deposito',
  templateUrl: './cliente-deposito.component.html',
  styleUrls: ['./cliente-deposito.component.scss']
})
export class ClienteDepositoComponent implements OnInit {

  clienteForm!: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let agencia = this.activatedRoute.snapshot.paramMap.get('agencia') as string;
    let numeroConta = this.activatedRoute.snapshot.paramMap.get('numeroConta') as string;

    this.clienteService.findCliente(agencia, numeroConta).subscribe(result => {
      this.createForm(result);
      }, (error => {
        console.log(error);
      }));
  }

  createForm(cliente: Cliente) {
    this.clienteForm = this.fb.group({
      idCliente: [cliente.id],
      nome: [cliente.nome],
      agencia: [cliente.conta.agencia.numero],
      numeroConta: [cliente.conta.numero],
      valor: [null],
    });
    this.cliente = cliente
  }

  depositar() {
    if (this.clienteForm.valid) {
      let transacao: Transacao = this.clienteForm.value;
      this.clienteService.depositar(transacao).subscribe(result => {
        if (result == null)
          this.router.navigate(['/list'])
      }, (error => {
        console.log(error);
      }));
  }

  }

}
