import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { Conta } from 'src/app/model/conta';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm!: FormGroup;
  alert = false;
  cliente: Cliente = new Cliente();

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nome: [null],
      senha: [null],
      email: [null],
      dtNascimento: [null],
      conta: [null],
    });
  }

  save() {
    this.alert = false;
    if (this.clienteForm.valid) {
      this.cliente = this.clienteForm.value;
      this.cliente.conta = new Conta(this.clienteForm.value.conta);

      this.clienteService.saveCliente(this.cliente).subscribe(result => {
        console.log(result);
        this.router.navigate(['/list'])
      }, (error => {
        console.log('oie');
        console.log(error);
        this.alert = true;
      }));
    } else {
      console.log('oi');
      this.alert = true;
    }
  }

  close() {
    this.alert = !this.alert;
  }

}
