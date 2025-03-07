import { MensagemView } from "../views/mensagem-view.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesList } from "../models/negociacoes-list.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoesList = new NegociacoesList();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoesList);
    }

    public adiciona(): void {
        if (this.diaDaSemanaUtil(this.inputData.valueAsDate)) {
            const negociacao = this.criaNegociacao();
            this.negociacoesList.adicionar(negociacao);
            this.atualizaView();
            this.limpaFormulario();
        } else {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        }
    }

    private criaNegociacao(): Negociacao {
        const date: Date = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }

    private limpaFormulario(): void {
        this.inputData.value = null;
        this.inputQuantidade.value = null;
        this.inputValor.value = null;
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoesList);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private diaDaSemanaUtil(date: Date): boolean {
        const dia = date.getDay();
        console.log(dia);
        return dia != 5 && dia !== 6;
    }
    
}
