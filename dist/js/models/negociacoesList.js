export class NegociacoesList {
    constructor() {
        this.negociacoesList = [];
    }
    adicionar(negociacao) {
        this.negociacoesList.push(negociacao);
    }
    listar() {
        return this.negociacoesList;
    }
}
