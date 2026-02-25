"use strict"
/* Sintaxes possíveis */
// 1) Funçõe anônima: criada/associada a uma constante
const exemplo1 = function(){
    console.log("Olá, sou uma função anônima");
};
// Chamar/invocar a função
exemplo1();
// 2) Funçõe nomeada: criadade forma livre, com qualquer nome.
function exemplo2(){
    console.log("Olá, sou uma função declarada/nomeada");
};
exemplo2();
// 3) Funçõe "Arrow": criadade forma livre, com qualquer nome.
const exemplo3 = () => {
    console.log("Olá, sou uma Arrow Function!");    
};
exemplo3();