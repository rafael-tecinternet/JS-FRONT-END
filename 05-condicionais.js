"use strict"
/* Operadores Relacionais
<    -> MENOR
<=   -> MENOR OU IGUAL
>    -> MAIOR 
>=   -> MAIOR OU IGUAL
!=   -> DIFEREÇA POR VALOR
!==  -> DIFEREÇA POR VALOR E TIPO
==   -> IGUALDADE POR VALOR
===  -> IGUALDADE POR VALO E TIPO */
// Exemplo de expressão condicional
let a = 10;
let b = "10";
let c = a > b; // true, pois A é MAIOR que B
let d = a == b; // true, pois o valor de A é IGUAL o valor de B
let e = a === b; // false, pois o tipo de A é DIFERENTE do tipo de B
console.log(c);
console.log(d);
console.log(e);
console.log("\n-----------------\n\n");
console.log("Exemplo 1: SIMPLES (if/se)");
/* Comando if */
let numero = 50;
if (numero >= 20) {
    console.log("Se você ver essa menssagem é porque a condição é VERDADEIRA/TRUE");
}
// Podemos omitir {} para instruções simples
if (numero < 100) console.log("Ok, é menor que 100");
console.log("\n-----------------\n\n");
console.log("Exemplo 2: COMPOSTA (if/else - se/senão)");
let aluno = "Steve Harris";
let idade = 65;
// Lógica 1: checando se é maior/igual a 18
let resultado;
if (idade >= 18 ) {
    resultado = "maior";
    // console.log(aluno + " é maior de idade");
} else {
    resultado = "menor";
    // console.log(aluno + " é menor de idade!");
}
console.log(aluno+" é "+resultado+" de idade!");
// Lógica 2: checando se é menor que 18
if (idade < 18) {
    resultado = "maior";
    // console.log(aluno + " é menor de idade");
} else {
    resultado = "menor";
    // console.log(aluno + " é maior de idade")
}
console.log(aluno+" é "+resultado+" de idade!");
// 1. Crie duas variáveis conforme a seguir:
// - Nota 1 (coloque um valor podendo ser de 0 a 10)
// - Nota 2 (coloque outro valor também podendo ser de 0 a 10)
let nota1 = 10;
let nota2 = 8.5;
// 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
// DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
let media = (nota1 + nota2) / 2;
console.log("Média é: "+media);
// 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado".
let situacao;
if (media >= 7) {
    // console.log("O aluno(a) " +aluno+ " está aprovado.");
    situacao = "aprovado." // undefined
} else {
    // console.log("O aluno(a) " +aluno+ " está reprovado.");
    situacao = "reprovado."
}
console.log("O aluno(a) "+aluno+" está "+situacao);
console.log("\n-----------------\n\n");
console.log("Exemplo 3: ENCADEADA/SUCESSIVA (if, else if,else - se/senão se/senão) ");
/* Contexto: determinar o desempenho do aluno baseado na média que teve.
Média acima de 9? Ótimo
Média acima de 7? Bom
Média acima de 5? Ruim
Média até 5? Péssimo
*/
let desempenho;
if (media > 9 ) {
    desempenho = "Ótimo"
} else if(media > 7){
    desempenho = "Bom"
} else if (media > 5){
    desempenho = "Ruim"
} else {
    desempenho = "Péssimo"
}
console.log("Sua média é: "+media+". Seu desempenho foi "+ desempenho+".");
console.log("\n-----------------\n\n");
// Uma loja online precisa sinalizar o nível de estoque de um produto, de acordo com a seguinte lógica:
// Estoque Crítico: se for zero
// Estoque Baixo: se for até 10
// Estoque normal: se for acima de 10
// Programe os recursos necessário para verificar o estoque e exibir estas informações.
let estoque = 11;
let menssagem;
if (estoque === 0) {
    menssagem = "Crítico ❌";
} else if (estoque <= 10){
    menssagem = "Baixo ⬇️";
} else {
    menssagem = "Normal 👍";
}
console.log(`O nível de estoque: ${estoque}, está ${menssagem}`);
console.log("\n-----------------\n\n");
console.log("Exemplo 4: operador ternário ?:");
console.log("Útil para if/else de ma linha");
console.log("Também conhecido como shorthand if");
let valorDaIdade = 5;
let result = valorDaIdade >= 18 ? "Maior" : "Menor"
console.log(result);
console.log("\n-----------------\n\n");

// Sistema de Desconto: uma loja quer aplicar descontos automáticos com base no valor da compra. As regras são:
// Acima de R$ 300? 20% de desconto.
// Acima de R$ 100? 10% de desconto.
// Até R$ 100? Zero de desconto.
// Você deve programar o código necessário para verificar estas faixas de valores e calcular o desconto em cima do valor da compra. 
let desconto;
let valorCompra = 101;
let valorFinal;
let perc;
if (valorCompra > 300){
    desconto = valorCompra * 0.2
    perc = 20
} else if ( valorCompra > 100) {
    desconto = valorCompra * 0.1
    perc = 10
} else {
    desconto = 0
    perc = 0
}
valorFinal = valorCompra -  desconto;

console.log("Valor da compra: R$"+ valorCompra);
console.log("Desconto de: "+ perc+"%");
console.log("Valor final da compra: R$"+ valorFinal);
console.log("Economizou R$:"+ desconto);

// Deve também exibir o valor original, o percentual de desconto, o valor final da compra e quanto economizou.
 
// Exemplos de saída para cada situação:
 
/* Valor da compra: R$ 500
Desconto de: 20%
Valor final da compra: R$ 400
Economizou: R$ 100 */
 
/* Valor da compra: R$ 200
Desconto de: 10%
Valor final da compra: R$ 180
Economizou: R$ 20 */
 
/* Valor da compra: R$ 100
Desconto de: 0%
Valor final da compra: R$ 100
Economizou: R$ 0
 */

