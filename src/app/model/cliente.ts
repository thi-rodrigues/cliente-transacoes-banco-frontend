import { Conta } from "./conta";

export class Cliente {
    id!: number;
    nome!: string;
    senha!: string;
    email!: string;
    dtNascimento!: Date;
    conta!: Conta
}
