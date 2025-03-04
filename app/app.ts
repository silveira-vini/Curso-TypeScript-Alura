import { Negociacao } from "./models/negociacao.js";

var negociacao = new Negociacao(new Date(), 30, 1200);
console.log(negociacao.data);
console.log(negociacao.volume);
negociacao = new Negociacao(new Date(), 20, 30000);
console.log(negociacao);