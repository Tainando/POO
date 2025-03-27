const prompt = require('prompt-sync')();

class Cliente{
    nome;
    idade;
    cpf;
    agencia;
 }
 let cliente = new Cliente();

cliente.nome = prompt("Digite o nome do Cliente");
cliente.idade = prompt("Digite a sua idade");
cliente.cpf = prompt("Digite o seu CPF");
cliente.agencia = prompt("digite a sua Agencia");

console.log(cliente);