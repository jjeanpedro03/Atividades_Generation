import leia from "readline-sync";

let numero;
let soma = 0;

do {
  numero = leia.questionInt("Digite um numero: ");

  if (numero > 0) {
    soma += numero;
  }
} while (numero !== 0);

console.log("\nA soma dos numeros positivos e:", soma);