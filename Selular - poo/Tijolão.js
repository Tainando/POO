const promp = require("prompt-sync")();

class Selular{
    marca;
    modelo;
    preco;
    memoria;
}
let Cebolão = new Selular;

Cebolão.marca(prompt("Qual é a marca do celular"));
Cebolão.modelo(prompt("qual é o modelo do celular"));
Cebolão.preco(prompt("qual é o preço do celular"));
Cebolão.memoria(prompt("qual é o armazenamento do celular"));

console.log(Cebolão);