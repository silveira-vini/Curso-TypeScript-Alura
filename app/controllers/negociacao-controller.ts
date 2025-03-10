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
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoesList);
    }

    public add(): void {
        if (this.businessDay(this.inputData.valueAsDate as Date)) {
            const negociacao = this.createNegociacao();
            this.negociacoesList.add(negociacao);
            this.updateView();
            this.clearForm();
        } else {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        }
    }

    private businessDay(date: Date): boolean {
        const dia = date.getDay();
        return dia != 5 && dia !== 6;
    }

    private createNegociacao(): Negociacao {
        const date: Date = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }

    private updateView(): void {
        this.negociacoesView.update(this.negociacoesList);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private clearForm(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
