import readlineSync from 'readline-sync';
const leia = readlineSync;

let nota1;
let nota2;
let nota3;
let nota4;

let media;

nota1 = leia.questionFloat("\nNota 1: ");
nota2 = leia.questionFloat("\nNota 2: ");
nota3 = leia.questionFloat("\nNota 3: ");
nota4 = leia.questionFloat("\nNota 4: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`\nMédia: ${media.toFixed(1)}`);
