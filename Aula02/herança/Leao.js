import { Animal } from './Animal.js'

export class Leao extends Animal {
    constructor(nome, raca, peso, idade, forca) {
        super(nome, raca, peso, idade);
        this.forca = forca;
    }

    atacar() {
        console.log("Leão Rugiu e atacou com " + forca + " de força");
    }
}