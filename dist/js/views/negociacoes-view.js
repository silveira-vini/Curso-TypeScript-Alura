import { View } from "./view.js";
export class NegociacoesView extends View {
    constructor(selector) {
        super(selector, true);
    }
    template(negociacoesList) {
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
                ${this.tableLines(negociacoesList)}
            </tbody>
        </table>
        `;
    }
    tableLines(negociacoesList) {
        return negociacoesList.listar().map(negociacao => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
            `;
        }).join('');
    }
}
