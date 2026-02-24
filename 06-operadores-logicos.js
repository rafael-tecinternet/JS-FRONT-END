"use strict"
/* Operadores Lógicos
&& -> E (AND)
|| -> OU (OR)
!  -> NÃO/NEGAÇÃO (NOT)*/
console.log("Exemplo &&: ");
/* Simulação de um processo de login:
Login é bem-sucedido se senha e usuário estiverem corretos */
const senhaBD = "123abc";
const loginBD = "ozzy.osbourn";
// Dados de entrada (simulação)
let senhaInformada = "123abc";
let loginInformado = "ozzy.osbourn";
/* Somente se todas as condições forem verdadeiras */
if (senhaInformada === senhaBD && loginInformado === loginBD) {
    // Login é feito
    console.log("Login realizado com sucesso!"); 
} else {
    // Senão: sem chance:
    console.log("Login ou senha inválidos!");   
}
console.log("\n\n Exemplo ||:");
/* Com || basta apenas UMA das condições seja verdadeira... */
let feriado = true;
let fimDeSemana = false;
// if (feriado === true || fimDeSemana === true) {
if(feriado || fimDeSemana){
    /* .. para que não tenha aula. */
    console.log("Não tem aula!");
} else {
    // Senão, vai estudar!
    console.log("Tem aula!");
}
console.log("\n\nExemplo !:");
let estaChovendo = true;
// se NÃO está chovendo (aqui invertemos a lógica usando !)
if (!estaChovendo) { // mesma coisa que estaChovendo === false
    console.log("Beleza, vou pra praia! ☀️");
} else {
    console.log("Vou ficar em casa... ⛈️");
}
console.log("\n\n Exercício:");
/* Você é o programador(a) responsável por implementar a lógica de um totem eletrônico na entrada de um evento exclusivo.
O sistema deve validar a entrada dos participantes com base em critérios de idade e credenciais.

Desafio: programe um script que utilize variáveis/constantes para armazenar as informações (fictícias) do visitante e, com operadores lógicos, permita determinar se o acesso é permitido.

As regras são:

- O visitante DEVE ter 18 anos ou mais.
- O visitante precisa atender a PELO MENOS uma das seguintes condições:
- Possuir um convite VIP
- Estar numa lista de convidados */
const verificaIdade = 18;
const listaConvidado = false;
const listaVip = true;
let idadeUsuario = 25;

if(idadeUsuario >= verificaIdade && (listaConvidado || listaVip)){
    console.log("pode entrar");
} else {
    console.log("não pode entrar");
}