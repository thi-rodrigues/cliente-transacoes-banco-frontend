import { Conta } from "./conta";

export class Cliente {
    nome?: string;
    senha?: string;
    email?: string;
    dtNascimento?: Date;
    conta?: Conta
}
