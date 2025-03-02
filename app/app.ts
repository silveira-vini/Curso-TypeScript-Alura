import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 30, 1200);
console.log(negociacao.data);
console.log(negociacao.volume);


