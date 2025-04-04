// instalando o TypeScript
// npm install -g typescript
// tsc --version
// Comando para atualizar o TypeScript
// npm update -g typescript

// Operadores em TypeScript
// Operadores Aritiméticos
let b: number = 10;
let a: number = 10;

let TotalSoma: number = a + b;

let TotalSubtração: number = a - b;
let TotalMultiplicação: number = a * b;
let TotalDivisão: number = a / b;
let TotalResto: number = a % b;

console.log(`A soma de ${a} + ${b} é ${TotalSoma} <br>`); // Escreve no arquivo

// Alert é uma caixa de mensagem que aparece na tela

// console.log(`A soma de ${a} + ${b} é ${TotalSoma}`)
// console.log(`A soma de ${a} - ${b} é ${TotalSubtração}`)
// console.log(`A soma de ${a} * ${b} é ${TotalMultiplicação}`)
// console.log(`A soma de ${a} / ${b} é ${TotalDivisão}`)
// console.log(`A soma de ${a} % ${b} é ${TotalResto}`)

// Para executar o código em TypeScript direto sem precisar o arquivo js, é só colocar o ts-node
// npm intall -g ts-node
// npx tsc --init
// ts-node Operadores.ts

// DIferenã entre tsc e ts-node
// tsc - compila o arquivo de Ts para Js
// ts-node executa o arquivo Ty diretamente, sem complilar para Js


let nome: string = "Lucas";

let sobrenome: string = "Silva";

let textoConcatenado: string = nome + " " + sobrenome;
let textoRepetido: string = nome.repeat(4);

// console.log(`Nome Completo: ${textoConcatenado}`);
// console.log(`Nome Repetido: ${textoRepetido}`);

let comparacao1: boolean = a == b; // Igualdade
let comparacao2: boolean = a != b; // Desigualdade
let comparacao3: boolean = a == b; // Igualdade Estrita
let comparacao4: boolean = a !== b; // Desigualdad Estrita

// console.log("Comparação1 : " + comparacao1);
// console.log("Comparação2 : " + comparacao2);
// console.log("Comparação3 : " + comparacao3);
// console.log("Comparação4 : " + comparacao4);

let comparacao5: boolean = a > 0 && b > 0;
let comparacao6: boolean = a < 0 || b < 0;
let comparacao7: boolean = !(a > 0);

// console.log("Comparação5 : " + comparacao5);
// console.log("Comparação6 : " + comparacao6);
// console.log("Comparação7 : " + comparacao7);

// Operadores Ternário

let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A"
console.log(resultado);

// Operador de Atribuição
let valor: number = 10;
valor += 5;
valor -= 5;
valor *= 5;
valor /= 5;
valor %= 5;
console.log(valor);

// Incremento e Decremento
let contador: number = 0;
contador++;
contador++;
contador--;
console.log("Contador: " + contador);

// Operador Nullish coalescing
let valorNulo: number | null = null;
let valorDefault: number = valorNulo ?? 10;

console.log(`Valor nulo: ${valorNulo}`);
console.log(`Valor Default: ${valorDefault}`);

// Operadores Spread
let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6, 7, 8];
console.log(`Números: ${numeros} + Novos Números: ${novosNumeros}`);

// Destructuring
let pessoa: { nome: string; idade: number } = { nome: "Lucas", idade: 25 };

let { nome: nomePessoa, idade: idadePessoa } = pessoa;

console.log(`Nome: ${nomePessoa} + Idade: ${idadePessoa}`);

// Vamos Criar um Objeto e como ele pode ser chamado
let objeto: { nome: string; idade: number } = { nome: "Lucas", idade: 25 };

let resultados: { [Key: string]: number | string | boolean } = {
    soma: TotalSoma,
    subtração: TotalSubtração,
    multiplicacao: TotalMultiplicação,
    divisao: TotalDivisão,
    resto: TotalResto
}

let resultados2: { [key: string]: any } = {
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
    rua: "Rua 1",
    numero: 123,
    },
}

console.log(resultados["soma"]);
console.log(resultados["subtração"]);
console.log(resultados["multiplicacao"]);
console.log(resultados["divisao"]);
console.log(resultados["resto"]);

console.log(resultados2["nome"]);
console.log(resultados2["idade"]);
console.log(resultados2["ativo"]);
console.log(resultados2["endereco"]);
console.log(resultados2["endereco"]["rua"]);
console.log(resultados2["endereco"]["numero"]);