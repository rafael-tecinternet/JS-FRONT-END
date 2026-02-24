"use strict"
// Exemplo 1: Objeto com dados de uma pessoa
console.log("Exemplo 1: \n");
const pessoa = {
    // Propriedade: valor
    nome: "Rafael",
    idade: 31,
    cidade: "São Paulo",
    estado: "SP"
};
console.log(pessoa);
console.log(pessoa["nome"]); 
// Sintaxe alternativa
console.log(pessoa.nome);
console.log(pessoa.cidade);
console.log(pessoa.idade);
console.log(`${pessoa.nome} é um super-herói!`);
console.log("\nExemplo 2:");
// Exemplo 2: Objeto com array
const livro = {
    titulo: "O senhor dos Anéis",
    autor: "J.R.R. Tolkie",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};
console.log(livro);
console.table(livro);
console.log(livro.titulo);
console.log(livro.volumes[1]);
console.log("\nExemplo 3:");
// Exemplo 3: Array de objetos
const livros = [
    {
        titulo: "Crônicas de Gelo e Fogo",
        ano: 1993
    },
    {
        titulo: "Desenvolvimento Web JS",
        ano: 2025
    },
    {
        titulo: "O Aprendiz de Alquimista",
        ano: 2016
    }
];
console.log(livros);
console.table(livros);
console.log(livros[2].titulo);

// 1. Crie um objeto chamado "aluno" contendo os seguintes dados:
/* - Nome Completo
- Data de Nascimento
- Lista de telefones (fixo e celular)
- Endereço contendo:
  - rua
  - número
  - bairro */
const aluno = {
    nomeCompleto: "Rafael Augusto França",
    dataDeNascimento: "11/10/1994",
    listaDeTelefone: ["95007-5601", "2943-4416"],
    endereco: {
            rua: "Anisio de abreu",
            numero: "328",
            bairro: "Parque Cisper"
        }  
};
// 2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. 
console.log(`Nome do aluno: ${aluno.nomeCompleto}`);
console.log(`Telefone celular: ${aluno.listaDeTelefone[0]}`);
console.log(`Bairro: ${aluno.endereco.bairro}`);






