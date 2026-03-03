import readlineSync from 'readline-sync';
const leia = readlineSync;

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

let salarioLiquido;

salarioBruto = leia.questionFloat('\nSalario bruto: ');
adicionalNoturno = leia.questionFloat('\nAdicional noturno: ');
horasExtras = leia.questionFloat('\nHoras Extras: ');
descontos = leia.questionFloat('\nDescontos: ');

salarioLiquido= salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`\nSalário líquido: ${salarioLiquido.toFixed(2)}`);