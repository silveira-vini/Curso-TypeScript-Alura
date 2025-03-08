import { NegociacoesList } from "../models/negociacoes-list.js";
import { View } from "./view.js";

export class NegociacoesView extends View<NegociacoesList> {

    protected template(negociacoesList: NegociacoesList): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${this.linhasDaTabela(negociacoesList)}
            </tbody>
        </table>
        `
    }

    private linhasDaTabela(negociacoesList: NegociacoesList): string {
        return negociacoesList.listar().map(negociacao => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
            `}).join('');
    }
}
