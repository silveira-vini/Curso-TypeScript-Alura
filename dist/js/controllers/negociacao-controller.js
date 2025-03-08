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
    adiciona() {
        if (this.diaDaSemanaUtil(this.inputData.valueAsDate)) {
            const negociacao = this.criaNegociacao();
            this.negociacoesList.adicionar(negociacao);
            this.atualizaView();
            this.limpaFormulario();
        }
        else {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        }
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace(/-/g, ','));
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoesList);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    diaDaSemanaUtil(date) {
        const dia = date.getDay();
        console.log(dia);
        return dia != 5 && dia !== 6;
    }
}
