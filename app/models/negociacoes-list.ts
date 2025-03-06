import { Negociacao } from "./negociacao.js";

export class NegociacoesList {

    private negociacoesList: Negociacao[] = [];

    constructor() {
    }

    adicionar(negociacao: Negociacao) {
        this.negociacoesList.push(negociacao);
    }

    listar(): readonly Negociacao[] {
        return this.negociacoesList;
    }
}