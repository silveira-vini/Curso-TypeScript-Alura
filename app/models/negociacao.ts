export class Negociacao {
    constructor(
        private readonly data: string,
        private readonly quantidade: number,
        private readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }
}
