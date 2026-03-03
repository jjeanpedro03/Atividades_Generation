import readlineSync from 'readline-sync';
const leia = readlineSync;

let num1;
let num2;
let num3;
let num4;

let diferenca;

num1 = leia.questionFloat("\nNúmero 1: ");
num2 = leia.questionFloat("\nNúmero 2: ");
num3 = leia.questionFloat("\nNúmero 3: ");
num4 = leia.questionFloat("\nNúmero 4: ");

diferenca = (num1 * num2) - (num3 * num4);

console.log(`\nDiferença: ${diferenca.toFixed(1)}`);
