export class NegociacoesList {
    constructor() {
        this.negociacoesList = [];
    }
    add(negociacao) {
        this.negociacoesList.push(negociacao);
    }
    listar() {
        return this.negociacoesList;
    }
}
