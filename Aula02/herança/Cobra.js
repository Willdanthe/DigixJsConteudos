// import Animal from './Animal.js';
import { Animal } from './Animal.js';

export class Cobra extends Animal{
    static venenosa = true;
    
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade); // Chama o construtor da classe pai
        this.cor = cor;
    }

    procriar(){
        console.log("A Cobra botou ovos");
    }
}