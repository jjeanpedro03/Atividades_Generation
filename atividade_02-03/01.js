import readlineSync from 'readline-sync';
const leia = readlineSync;

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat('\nSalario: ');
abono = leia.questionFloat('\nAbono: ');

novoSalario = salario + abono;

console.log(`\nNovo Salario: ${novoSalario.toFixed(2)}`);