const prompt = require('prompt-sync')();

class Cliente{
    #nome;
    idade;
    cpf;
    agencia;
    getNome (){
        return this.#nome;
    }

    setNome(Value){
        this.#nome = Value
    }
 }
 let cliente = new Cliente();

cliente.setNome(prompt("Digite o nome do Cliente"));
cliente.idade = prompt("Digite a sua idade");
cliente.cpf = prompt("Digite o seu CPF");
cliente.agencia = prompt("digite a sua Agencia");

console.log(cliente);
console.log(cliente.getNome());