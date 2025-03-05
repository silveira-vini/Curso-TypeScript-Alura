import { Negociacao } from "./negociacao.js";

export class NegociacoesList {
    private negociacoesList: Array<Negociacao> = [];

    constructor() {
    }

    adicionar(negociacao: Negociacao) {
        this.negociacoesList.push(negociacao);
    }

    listar(): ReadonlyArray<Negociacao> {
        return this.negociacoesList;
    }
}