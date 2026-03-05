import pkg from 'enquirer';
const { NumberPrompt } = pkg as any;

async function main() {
    const numeros: Set<number> = new Set([6, 8, 1, 2, 5, 9, 7, 10, 3, 4]);

    const prompt = new NumberPrompt({
        message: 'Digite um número para verificar se ele pertence ao conjunto:',
    });

    try {
        const resposta = await prompt.run();

        if (numeros.has(resposta)) {
            console.log(`O número ${resposta} pertence ao conjunto.`);
        } else {
            console.log(`O número ${resposta} não pertence ao conjunto.`);
        }
    } catch (error) {
        console.error("Houve um erro na captura dos dados.");
    }
}

main();