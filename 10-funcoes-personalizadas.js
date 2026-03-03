'use script';
console.log(">>funções personaalizadas ..");

// Sintaxes possíveis

// 1) Função anônima: criada/associada a uma constante
console.log("Função anônima:\n\n");
const exemplo1 = function() {
    console.log("Óla, sou uma função anônima");
}
/* Obs: é importante primeiro declarar a função, para só 
depois chamá-la/executá-la. */
exemplo1(); // chamar/invocar a função

// 2) Função nomeada: criada de forma livre, com qualquer nome.
function exemplo2() {
    console.log("Oi, sou a função declarada/nomeada");
}
/* Obs: nesta abordagem, a ordem de dclaração/chamada não 
importa. */
exemplo2(); // chamar/invocar a função

// 3) Função "arrow/flecha" (arrow function)
const exemplo3 = () => {
    console.log("Olá!! sou uma arrow function.");
}
exemplo3(); // chamar/invocar a função ;
console.log("\n================\n");
/* Funções com parâmetros e retorno */
console.log("\n\n>> Função com parâmetro/argumento.");
/* Aqui trabalhamos com parâmetros opcionais.
É um parâmetro opcional quando possui um valor padrão definido nos parênteses da função. Neste caso, se o valor não for informado ao chamar a função, passa a valer o valor padrão definido. */
function saudacao( nome = "Visitante", sobrenome = "" ) {
    console.log("Olá, " +nome+ " " +sobrenome);
    
}
saudacao("Tiago");
saudacao("Michele");
saudacao("Bernardo");
saudacao();
saudacao("Fulano", "da Silva");
saudacao();

console.log("\n\n>> Função com parâmetro e retorno.");
function multiplicar( valor1, valor2 ) {
    // Guardando em variável LOCAL o resultado da operação
    // let resultado = valor1 * valor2;
    // Retornando para FORA da função o que foi calculado
    // return resultado;
    // Return direto na expressão;
    return valor1 * valor2;
}
// Ação 1: chamar a função e passa os valores
// Ação 2: recebe/mostra o resultado retornado pela função
console.log("Resultado 1: " +multiplicar(10, 5));
console.log("Resultado 2: " +multiplicar(200, 3));
// Chama a função, passa valores, recebe retorno e aguarda
let resultado3 = multiplicar(1000, 5)
console.log(resultado3); // Aqui, apenas mostramos
console.log("\n================\n");
console.log("Simplificando com  Arrow Function");
// Versão 1: sintaxe declarada/nomeada
/* function somar (valor1, valor2){
    return valor1 + valor2;
    }
    */
   // Versão 2: Arrow function
   //    const somar = (valor1, valor2) => {
    //        return valor1 + valor2;
    //     }
    // Versão 3: Arrow function com retorno implícito
const somar = (valor1, valor2) => valor1 + valor2;   
console.log(somar(10,100)); 
const alunos = ["Ozzy", "Dio", "Ian"];
// forEach com function anônima tradicional
console.log("\n================\n");
alunos.forEach( function(aluno){
    console.log(aluno.toUpperCase());
} )
console.log("\n================\n");
// forEach com arrow function
alunos.forEach((aluno) => console.log(aluno.toLocaleUpperCase()));
console.log("\n================\n\n");
console.log("\nFormatação valores monetários\n\n");
function formatarMoeda(valor, moeda = "BRL", digitos = 2){
    // Determinando os parâmetros do recurso de formatação
    const opcoes = {
        style: "currency",
        currency: moeda,
        minimumFractionDigits: digitos
    };
    // Aplicando a formatação e retornando o valor formatado
    return new Intl.NumberFormat("pt-br", opcoes).format(valor);
};
let preco = 5000;
let desconto = preco * 0.1; // 10%
let precoFinal = preco - desconto;
console.log("Preço original: "+formatarMoeda(preco, "USD"));
console.log("Desconto: "+formatarMoeda(desconto, "BRL", 3));
console.log("Preço final: "+formatarMoeda(precoFinal));
console.log("\n================\n");
