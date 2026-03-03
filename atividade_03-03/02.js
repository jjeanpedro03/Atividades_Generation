import readlineSync from 'readline-sync';

let leia = readlineSync;

let numero;
let tipo;
let sinal;

numero = leia.questionInt('Digite um número: ');

if (numero % 2 === 0) {
    tipo = 'par';
} else {
    tipo = 'ímpar';
}

if (numero >= 0) {
    sinal = 'positivo';
} else {
    sinal = 'negativo';
}

console.log('');
console.log(`O Número ${numero} é ${tipo} e ${sinal}!`);