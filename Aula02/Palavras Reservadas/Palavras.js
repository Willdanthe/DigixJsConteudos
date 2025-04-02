let pessoa = {
    nome: "lucas"
}

// Palabras reservadas no Js
// Assign, ele faz uma cópia do objeto

console.log(Object.getOwnPropertyDescriptors(pessoa)); // Mostra os atributos e métodos do objeto

// Object.assign( pessoa2, pessoa); // Copia o objeto de pessoa para pessoa2

// Agora desestruturar um objeto, criando variáveis
let config = {
    ip : '123.0.0.4:',
    port:'8080',
    block: true,
}

let { ip, port, block } = config;
console.log(ip, port, block)

// Desestruturar um array
let lista = [1,2,3,4];
let [a,b,c,d] = lista;
console.log(a,b,c,d);


// Desestruturar array co rest operator  -> ... <-
let lista2 = [1,2,3,4,5]
let [e, ...f] = lista2;

console.log(e);
console.log(f);


