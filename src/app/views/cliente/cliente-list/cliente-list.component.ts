import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from '../../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  public clientes: Cliente[] = [];

  totalPages: number[] = [];
  pageNumber: number = 0;
  paginaAtual: number = 0;
  visualizado: boolean = false;

  public comoFechouModal: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.totalPages = [];
    this.findAll(this.pageNumber);
  }

  depositar(id: number) {

  }

  debitar(id: number) {

  }

  findAll(page: number) {
    this.clienteService.findAllClientes(page).subscribe(result => {
      this.clientes = result.content;
      console.log(this.clientes);


      for (var i = 0; i < result.totalPages; i++) {
        this.totalPages[i] = i;
      }
    }, (error) => {
      console.log(error);
    });
  }

  page(page: number) {
    if (page >= 0) {
      this.paginaAtual = page;
      this.findAll(page);
    }
  }

}
