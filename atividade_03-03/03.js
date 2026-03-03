import readlineSync from 'readline-sync';

let leia = readlineSync;

let codigo;
let quantidade;
let produto;
let preco;
let total;

codigo = leia.questionInt('Código do Produto: ');
quantidade = leia.questionInt('Quantidade: ');

switch (codigo) {
    case 1:
        produto = 'Cachorro Quente';
        preco = 10.00;
        break;
    case 2:
        produto = 'X-Salada';
        preco = 15.00;
        break;
    case 3:
        produto = 'X-Bacon';
        preco = 18.00;
        break;
    case 4:
        produto = 'Bauru';
        preco = 12.00;
        break;
    case 5:
        produto = 'Refrigerante';
        preco = 8.00;
        break;
    case 6:
        produto = 'Suco de laranja';
        preco = 13.00;
        break;
    default:
        console.log('Código inválido!');
        process.exit();
}

total = quantidade * preco;

console.log('');
console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);