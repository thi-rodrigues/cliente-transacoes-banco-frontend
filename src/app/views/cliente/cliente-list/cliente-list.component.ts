import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from '../../cliente.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalVisualizarComponent } from 'src/app/components/modal/modal-visualizar/modal-visualizar.component';
import { ClienteDepositoComponent } from '../cliente-deposito/cliente-deposito.component';
import { Route, Router } from '@angular/router';

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

  @ViewChild(ClienteDepositoComponent, {static: false})
  deposito!: ClienteDepositoComponent;

  private opcoesModal: NgbModalOptions = {
      backdrop: true,
      centered: true,
      backdropClass: 'backdrop-modal',
      windowClass: 'position-modal',
      size: 'xl'
    };

  constructor(
    private clienteService: ClienteService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.totalPages = [];
    this.findAll(this.pageNumber);
  }

  findAll(page: number) {
    this.clienteService.findAllClientes(page).subscribe(result => {
      this.clientes = result.content;
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

  depositar(agencia: number, numeroConta: number) {
    this.router.navigate([`/depositar/${agencia}/${numeroConta}`])
  }

  debitar(agencia: number, numeroConta: number) {
    this.router.navigate([`/debitar/${agencia}/${numeroConta}`])
  }

  open(cliente: Cliente) {
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.modalService.open(ModalVisualizarComponent, this.opcoesModal).result.then((result) => {
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(dtNascimento: Date): number {
    return new Date().getFullYear() - new Date(dtNascimento).getFullYear();
  }

}
