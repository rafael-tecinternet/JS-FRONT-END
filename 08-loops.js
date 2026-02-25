'use strict';
 
/* Loops são comandos de repetição baseados em alguma lógica.
Geralmente, o controle da quantidade de repetições do loop é determinado
por uma condição e pela atualização de uma variável contadora.
 
Loops mais comuns: WHILE (enquanto) e FOR (para) */
 
console.log("Exemplo 1: WHILE (enquanto)\n");
 
/* Algoritmo:
Enquanto uma condição for verdadeira, faça ações diversas
e atualize a variável de controle. */
 
// Variável de controle do loop
let contador = 1;
 
while( contador <= 5 ){
    console.log("Valor da variável é: "+contador);
    contador++; // pega contador e adiciona 1
    // contador = contador + 1;
    // contador += 1;
};
console.log("\nExemplo 2: FOR(PARA)\n\n");
for (let i= 0; i < 10; i++) {
    console.log(" I vale: " + i);
};
console.log("\nExemplo 3: FOR(PARA) para acessar ARRAY\n\n");
const filmes =  ["john Wick", "A noite do terror", "Super-man", "Homen Aranha", "Os trapalhoes", "007", "A arca de noé", "Avengers", "FLash", "Capitão América", "The horror History"];
/* Obs.: aqui é OBRIGATÓRIO começar em zero, pois o acesso aos elementos do array sempre inicia em zero. */
// Guardar ANTES do loop o tamanho do array
let quantidadeDeFilmes = filmes.length
for (let i = 0; i < quantidadeDeFilmes; i++) {
    console.log(filmes[i]);
};
console.log("\nExemplo 3: FOR/OF para acessar ARRAY\n\n");
/* for/of loops exclusivo para arrays */
for (const filme of filmes) {
    console.log(filme);
};
console.log("\nExemplo 3: FOR/IN para acessar OBJETOS\n\n");
// Loop for/in EXCLUSIVO para OBJETOS
const pessoa = {
    //propriedade : valor
    nome: "Rafael Augusto",
    idade: "31",
    cidade: "São Paulo",
    estado: "SP"
};
for (const propriedade in pessoa) {
    // console.log(propriedade);
    // Atenção: para acessar as propriedades dinamicamente, use SEMPRE a sintaxe de colchetes
    console.log(propriedade);
    console.log(pessoa[propriedade]); 
};
console.log("\nExercício:\n\n");
/*  
1. Faça um array chamado "clientes" contendo 3 objetos.
Cada objeto deverá ter uma propriedade chamada "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
*/
const clientes = [
    {
        identificador: 1,
        nome: "Dio"
    },
    {
        identificador: 2,
        nome: "Ozzy"
    },
    {
        identificador: 3,
        nome: "Ian"
    }
];

for (const prop in clientes) {
    console.log(`Cliente: ${clientes[prop].nome} \nID: ${clientes[prop].identificador}`);
};

console.log("\n--------\n\n");

let cliente = clientes.length;
for (let i = 0; i < cliente; i++) {
    console.log(`Cliente: ${clientes[i].nome} \nID: ${clientes[i].identificador}`);
    }

console.log("\n--------\n\n");
  
for (const cliente of clientes) {
    console.log(`Cliente: ${cliente.nome} \nID: ${cliente.identificador}`);
};