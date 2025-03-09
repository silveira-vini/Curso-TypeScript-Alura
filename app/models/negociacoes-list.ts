import { Negociacao } from "./negociacao.js";

export class NegociacoesList {

    private negociacoesList: Negociacao[] = [];

    constructor() {
    }

    public add(negociacao: Negociacao) {
        this.negociacoesList.push(negociacao);
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoesList;
    }
}