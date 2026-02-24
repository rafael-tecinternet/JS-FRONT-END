// Habilitando o modo estrito da linguagem. Isso evita/minimiza erro relacionados a não declaração de variáveis e ao uso de palavras reservadas.
'use strict';
// 1) Crie uma variável chamada "uc" e coloque nela o número da UC que estamos (que é 1 rs)

let uc = 1;

// 2) Crie uma variável chamada "competencia" e coloque nela uma frase que represente o que estamos estudando nesta UC (que é JavaScript).

let competencia = "JavaScript";
 
// 3) Monte e mostre uma frase no console exibindo a UC e a competência. Exemplo: Estamos na UC1 estudando Front-End com JavaScript.

console.log(
    `Estamos na UC${uc} estudando Front-End com ${competencia}.`
);
