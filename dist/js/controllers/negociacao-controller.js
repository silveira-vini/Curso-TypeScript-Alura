import { Negociacao } from "../models/negociacao.js";
import { NegociacoesList } from "../models/negociacoesList.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesList = new NegociacoesList();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoesList.adicionar(negociacao);
        console.log(this.negociacoesList.listar());
        this.limpaFormulario();
    }
    criaNegociacao() {
        const date = this.inputData.value.split('-').reverse().join('/');
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    limpaFormulario() {
        this.inputData.value = null;
        this.inputQuantidade.value = null;
        this.inputValor.value = null;
        this.inputData.focus();
    }
}
