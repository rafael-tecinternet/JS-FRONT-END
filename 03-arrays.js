'use strict';

// Declarando um array
const desenhos = ["naruto", "one piece", "demon slayer", "one push man"];
// Acesso apenas para o programador visando testes
console.log(desenhos);
// Acesso individual através do índice
console.log(desenhos[2]);
console.log(desenhos[3]);
// o protagonista/desenho do Naruto era o Naruto
console.log(`
        O protagonista/desenho do Naruto era o ${desenhos[0]}    
    `);
// Alternativa de saída em formato de tabela (só para programador(a)) 
console.table(desenhos);
// Array heterigênio (valores de tipo diferentes)
// Não faça isso! só saiba que é possível..
let teste = "beleza";
let coisas = ["Senac", 10, "<h2>Sei la</h2>", 15.55597, teste];
console.table(coisas);
// Exercícios
// 1) Crie um array contendo o nome de 7 coisas que você gosta (exemplo: artistas, músicas, livros, comida... sei lá... escolhe, inventa!)
const gostos = ["treinar", "dormir", "jogar", "andar", "sair", "viajar", "praia"];
// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.
console.log("\n");
console.log("\n----------------/\n");
console.log("\n----------------/\n");
console.log("\n----------------/\n");
console.log("\n");
console.log(gostos);
console.log("\n");
console.log(`Hoje vou ${gostos[1]} quando chegar em casa e quando acordar vou ${gostos[4]} para comprar sunga que vamos para ${gostos[6]}`);
console.log("\n");
// Criando uma matriz (array de arrays)
const ferramentasDeTI = [
    ["HTML5", "CSS", "JS"], 
    ["Figma", "Photoshop", "corelDRAW", "Illustrator"],
    ["PHP", "Node.js", "SQL", "Java", "Python", "ASP.Net"]
];
console.table(ferramentasDeTI);
console.log("\n");
console.log(ferramentasDeTI);
// Acessando cada elemento de cada array interno
console.log("\n");
console.log(ferramentasDeTI[1][2]);
// Mostre o ASP.Net
console.log(ferramentasDeTI[2][5]);
// Mostre o HTML5
console.log(ferramentasDeTI[0][0]);
console.log("\n");
// Mostre uma frase combinando Photoshop com PHP
console.log(`Preciso criar uma aplicação onde a parte de Front-END vou usar a ferramenta ${ferramentasDeTI[1][1]} e vou usar a linguagem de programação ${ferramentasDeTI[2][0]}.`);

