import pkg from 'enquirer';
const { Select, Input } = pkg as any;
import { Stack } from "./Stack.js";

const pilha = new Stack<string>();

async function principal() {
    let loop = true;

    while (loop) {
        const menu = new Select({
            name: 'opcao',
            message: 'Menu Pilha:',
            choices: [
                '1 - Adicionar Livro',
                '2 - Listar Livros',
                '3 - Retirar Livro',
                '0 - Sair'
            ]
        });

        const opcao = await menu.run();

        switch (opcao.charAt(0)) {
            case '1':
                const livroInput = new Input({ message: 'Nome do Livro:' });
                const nomeLivro = await livroInput.run();
                pilha.push(nomeLivro);
                console.log(`\nLivro "${nomeLivro}" adicionado.`);
                break;

            case '2':
                console.log("\nESTANTE DE LIVROS");
                if (pilha.isEmpty()) {
                    console.log("A pilha está vazia.");
                } else {
                    console.log("+-------+----------------------+");
                    console.log("| Topo  | Nome do Livro        |");
                    console.log("+-------+----------------------+");
                    pilha.printStack();
                    console.log("+-------+----------------------+");
                }
                break;

            case '3':
                if (pilha.isEmpty()) {
                    console.log("\nA pilha está vazia.");
                } else {
                    pilha.pop();
                    console.log("\nO livro do topo foi retirado.");
                }
                break;

            case '0':
                console.log("\nSaindo... Programa Finalizado!");
                loop = false;
                break;
        }
    }
}

principal();