import pkg from 'enquirer';
const { Input } = pkg as any;

async function main() {
    const cores: string[] = [];
    
    console.log("Digite 5 cores para o Array:");

    try {
       
        for (let i = 0; i < 5; i++) {
            const prompt = new Input({
                message: `Digite a ${i + 1}ª cor:`
            });

            const cor = await prompt.run();
            cores.push(cor); 
        }

        console.log("\nListar todas as cores:");
        cores.forEach((cor) => {
            console.log(cor);
        });

        console.log("\nOrdenar as cores:");
        const coresOrdenadas = [...cores].sort();
        coresOrdenadas.forEach((cor) => {
            console.log(cor);
        });

    } catch (error) {
        console.error("Houve um erro na captura dos dados.");
    }
}

main();