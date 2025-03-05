import { Negociacao } from "../models/negociacao.js";
import { NegociacoesList } from "../models/negociacoesList.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoesList = new NegociacoesList();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoesList.adicionar(negociacao);
        console.log(this.negociacoesList.listar());
        this.limpaFormulario();
    }

    criaNegociacao(): Negociacao {
        const date: string = this.inputData.value.split('-').reverse().join('/');
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(
            date,
            quantidade,
            valor
        );
        return negociacao;
    }

    limpaFormulario(): void {
        this.inputData.value = null;
        this.inputQuantidade.value = null;
        this.inputValor.value = null;
        this.inputData.focus();
    }
    
}
