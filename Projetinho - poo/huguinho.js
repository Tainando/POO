const prompt = require('prompt-sync')();

// Modelo de atributos e funçoes para criação de um objeto
class Cliente {
    // # = privar dado
    #nome;// atributo
    idade;
    cpf;
    agencia;
    
    // retorna uma string com os dados/atributos
    getNome() {
        return this.#nome;
    }

    // preenche nome
    setNome(Value) {
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