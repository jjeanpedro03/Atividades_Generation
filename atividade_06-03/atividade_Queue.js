import pkg from 'enquirer';
const { Select, Input } = pkg;
import { Queue } from "./Queue.js";
const fila = new Queue();
async function principal() {
    let loop = true;
    while (loop) {
        const menu = new Select({
            name: 'opcao',
            message: 'Menu Fila:',
            choices: [
                '1 - Adicionar Cliente',
                '2 - Listar Clientes',
                '3 - Retirar Cliente',
                '0 - Sair'
            ]
        });
        const opcao = await menu.run();
        switch (opcao.charAt(0)) {
            case '1':
                const nomeInput = new Input({ message: 'Nome do Cliente:' });
                const nome = await nomeInput.run();
                fila.enqueue(nome);
                console.log(`\nCliente "${nome}" adicionado.`);
                break;
            case '2':
                console.log("\nLISTA DE CLIENTES");
                if (fila.isEmpty()) {
                    console.log("A fila está vazia.");
                }
                else {
                    console.log("+-------+----------------------+");
                    console.log("| Topo   | Nome do Cliente      |");
                    console.log("+-------+----------------------+");
                    fila.printQueue();
                    console.log("+-------+----------------------+");
                }
                break;
            case '3':
                if (fila.isEmpty()) {
                    console.log("\nA fila está vazia.");
                }
                else {
                    fila.dequeue();
                    console.log("\nO primeiro cliente foi chamado.");
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
