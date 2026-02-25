"use strict"
// Texto (string)
console.log("\nTextos: \n\n");
let frases = " O JavaScript é INCRÍVEL! "
// Transforma pra maiúsculas
console.log(frases.toUpperCase());

// Transforma pra minúsculas
console.log(frases.toLocaleLowerCase());

// Verifica se uma dada string existe em outra
console.log(frases.includes("Java"));

// Procura e substitui
console.log(frases.replace("Java", "PHP"));

// Encadeamento de funções: primeiro o trim para remove espaços, depois replaceAll para trocar os espaços que sobraram por - .
console.log(frases.trim().replaceAll(" ", "-"));
console.log("------------------ \n\n");

// Números 
console.log("\nNúmeros: \n\n");
let preco = 19.95422;
console.log(preco);
// Fixar quantidade de casas decimais
console.log(preco.toFixed(2));
let numeroQueVirouTexto = preco.toFixed(2);
console.log(typeof numeroQueVirouTexto); // string
let valorQueEraTexto = parseFloat(numeroQueVirouTexto);
console.log(typeof valorQueEraTexto); // number
// Arredonda para o próximo número inteiro
console.log(Math.round(preco));
// Arredonda para CIMA
console.log(Math.ceil(preco));
// Arredonda para baixo
console.log(Math.floor(preco));
// Retorna o maior valor de uma lista
console.log(Math.max(10, 5, 100));
// Retorna o menor valor de uma lista
console.log(Math.min(10, 5, 100));
console.log("------------------ \n\n");
// Arrays
console.log("\nArrays: \n\n");
const filiaisSP = [
    "São Paulo", "Mogi das Cruzes", "Ubatuba"
];
const filiaisRJ = [
    "Rio de Janeiro", "petrópolis"
];
// Usamos concat para combinar arrays
const filiaisSudeste = filiaisSP.concat(filiaisRJ);
console.log(filiaisSudeste);
//Operador SPREAD ...
const outroExemplo = [... filiaisSP, ...filiaisRJ];
console.log(outroExemplo);
//Função para loop
filiaisSudeste.forEach(function( filial){
    console.log(filial);   
});
// Internacionalização
console.log("\nInternacionalização: \n\n");
let valor1 = 1243.5654;
let valor2 = 55894.6574454;
//Criando um FORMATADOR de valor monetário
const fomatadorDePreco = new Intl.NumberFormat("pt-br", {
    style: "currency", 
    currency: "BRL"
})
// Aplicando o formatador aos valores
console.log(fomatadorDePreco.format(valor1));
console.log(fomatadorDePreco.format(valor2));
