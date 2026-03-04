import leia from "readline-sync";

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];

  for (let j = 0; j < 3; j++) {
    matriz[i][j] = leia.questionInt(`Digite o valor da posicao [${i}][${j}]: `);
  }
}

console.log("\nDiagonal Principal:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
  somaPrincipal += matriz[i][i];
}

console.log("\nDiagonal Secundaria:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i][2 - i]);
  somaSecundaria += matriz[i][2 - i];
}

console.log("\nSoma da Diagonal Principal:", somaPrincipal);
console.log("Soma da Diagonal Secundaria:", somaSecundaria);