import readlineSync from 'readline-sync';

let leia = readlineSync;

let numero1;
let numero2;
let operacao;

numero1 = leia.questionFloat('Digite o 1º número: ');
numero2 = leia.questionFloat('Digite o 2º número: ');
operacao = leia.questionInt('Operação: ');

console.log('');

switch (operacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log('Operação Inválida!');
}