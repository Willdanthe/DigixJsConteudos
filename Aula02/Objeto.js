// Aula de Orientação a Objetos (OOP) em JavaScript

// Definição de uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para apresentar a pessoa
    apresentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("João", 25);

// Chamando o método apresentar
console.log(pessoa1.apresentar());

let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    ligar: function () {
        console.log("Ligando o caro");
    },
    paisDeOrigem: {
        pais: "Brasil",
        cidade: "São paulo",
    }
};

console.log(carro);

// Modificar os valores denro do objeto
carro.marca = "Toyota";
carro.marca = "Ka";
console.log(carro);

// Deletando propriedades do objeto
delete carro.ano;
console.log(carro);

// alguns operadores do objeto
console.log('marca' in carro);
carro.keys();

