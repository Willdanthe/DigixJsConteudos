import { Leao } from "./Leao.js";
import { Cobra } from "./Cobra.js";

const snake = new Cobra("Cega","Raca",10,5,"preta");
const lion = new Leao("Leão","Raca",10,5,4);

// nome, raca, peso, idade, cor

console.log(snake);
console.log(lion);

// comando do package.json é o npm init -y