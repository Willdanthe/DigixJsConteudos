// Criar um objeto pareido com uma funçã construtora, 
// mas é um objeto literal que no final é um objeto

function Jogador(nome, idade)
{
    this.nome = nome; 
    this.idade = idade;
    this.chutar = function(){
        console.log(this.nome + " chutou a bola!");
    }
}

function Time (nome, qnt){
    this.nome = nome;
    this.qnt = qnt;
    this.jogadores = []
    this.addJogador = function(Jogador) {
        this.jogadores.push(Jogador)
    }
}

// function compare(obj1, obj2){
//     if ( obj1 instanceof obj2 )
//     {
//         console.log("São iguais");
        
//     } else {
//         console.log("Não são iguais");
        
//     }
// }

let jogador1 = new Jogador("Caça rato", 30);
let jogador2 = new Jogador("Yuri Alberto", 25);

let time1 = new Time("São paulo", 11);
let time2 = new Time("Corinthians", 11);

time1.addJogador(jogador1);
time2.addJogador(jogador2);

console.log(jogador1 instanceof Jogador);

// compare(jogador1,jogador2)
