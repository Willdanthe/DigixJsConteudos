export class Animal {
    constructor(nome, raca, peso, idade){
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;
    } 

    getNome()
    {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getnome(){
        return this.nome
    }

    setnome(nome){
        this.nome = nome;
    }
    getraca(){
        return this.raca
    }

    setraca(raca){
        this.raca = raca;
    }
    getpeso(){
        return this.peso
    }

    setpeso(peso){
        this.peso = peso;
    }
    getidade(){
        return this.idade
    }

    setidade(idade){
        this.idade = idade;
    }

    procriar()
    {
        console.log("Novas vidas");
    }

    mover()
    {
        console.log("movendo-se");
    }

}