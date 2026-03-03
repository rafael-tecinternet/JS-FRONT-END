"use strict"
/* Exemplo 1: Selecionando os elementos */
const pValor = document.querySelector("#valor"); 
const buttonSomar = document.querySelector("#somar"); 
const buttonSubtrair = document.querySelector("#subtrair");
let contador = 0;
buttonSubtrair.disabled = true;
// Monitorar o evento de clique nos botões (note o uso de outra função interna, chamada de Função CALLBACK)
buttonSomar.addEventListener("click", () => {
    contador++;
    pValor.textContent = contador;
    //Habilitamos quando começa a somar
    buttonSubtrair.disabled = false;
});
buttonSubtrair.addEventListener("click", () => {
    // Impedindo contador negativo
    if (contador > 0 ) contador--;
    // Exibindo valor no HTML 
    pValor.textContent = contador;
    // Zerou o contador? Desabilita o botão subtrair
    if ( contador === 0) buttonSubtrair.disabled = true;
});
/* Exemplo 2 */
const buttomMostrarEsconder = document.querySelector(".mostrar-esconder");
const pTexto = document.querySelector(".texto");
buttomMostrarEsconder.addEventListener("click", () => {
    pTexto.classList.toggle("oculto")
    /* if (pTexto.classList.toggle("oculto")){
        buttomMostrarEsconder.textContent = "Mostrar"
    } else { 
        buttomMostrarEsconder.textContent = "Esconder" 
    }  */
    // Solução 1: Analisando o conteúdo/texto do botão   
   /*  if (buttomMostrarEsconder.textContent === "Esconder"){
        buttomMostrarEsconder.textContent = "Mostrar"
    } else { 
        buttomMostrarEsconder.textContent = "Esconder" 
    }  */
    //Solução 2: Analisando se a classe está aplicada no texto
    if (pTexto.classList.contains("oculto")) {
        buttomMostrarEsconder.textContent = "Mostrar"
    } else {
        buttomMostrarEsconder.textContent = "Esconder"
    }   
});
/* Exemplo 3 */
