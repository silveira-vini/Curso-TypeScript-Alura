import { MensagemView } from "../views/mensagem-view.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesList } from "../models/negociacoes-list.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesList = new NegociacoesList();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoesList);
    }
    add() {
        if (this.businessDay(this.inputData.valueAsDate)) {
            const negociacao = this.createNegociacao();
            this.negociacoesList.add(negociacao);
            this.updateView();
            this.clearForm();
        }
        else {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        }
    }
    businessDay(date) {
        const dia = date.getDay();
        return dia != 5 && dia !== 6;
    }
    createNegociacao() {
        const date = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
    updateView() {
        this.negociacoesView.update(this.negociacoesList);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    clearForm() {
        this.inputData.value = null;
        this.inputQuantidade.value = null;
        this.inputValor.value = null;
        this.inputData.focus();
    }
}
