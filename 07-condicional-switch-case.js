"use strict"
console.log("Switch/case/default/break");
/* Simulação de Chatbot de atendimento ao cliente */
console.log("Boas-vindas ao Chatbox!");
console.log("\nComo posso ajudar? Escolha: \n\n"
    + "1. Financeiro\n" + 
    "2. Vendas\n" + 
    "3. Suporte\n\n"
);
let opcao = 4; // Entrada
switch (opcao) {
    case 1:
        console.log("Financeiro");        
        console.log("Legal, o que quer saber sobre finanças?");        
        break;
    case 2:
        console.log("Vendas");
        console.log("Show, quer comprar o que?");        
        break;
    case 3:
        console.log("Suporte");
        console.log("Contato do suporte!");        
        break;    
    default:
        console.log("Não entendi..");
        console.log("Aguarde para falar com atendente!");
}
