import { Agencia } from "./agencia";

export class Conta {
  numero!: number;
  saldo!: number;
  agencia!: Agencia;

  constructor(conta: number) {
    this.numero = conta;
  }

}
