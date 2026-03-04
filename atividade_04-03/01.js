import leia from "readline-sync";

let primeiro = leia.questionInt("Digite o primeiro numero do intervalo: ");
let ultimo = leia.questionInt("Digite o ultimo numero do intervalo: ");

if (primeiro >= ultimo) {
  console.log("Intervalo invalido!");
} else {
  console.log(`\nNo intervalo entre ${primeiro} e ${ultimo}:`);

  for (let i = primeiro; i <= ultimo; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} e multiplo de 3 e 5`);
    }
  }
}