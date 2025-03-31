const array = [1,2,3,4,5,6,7,8,9,10];

const array2 = new Array(1,2,3,4,5,6,7,8,9,10);

console.log(array[6]); // acessando array

array[6] = 20;

console.log(array[6]);

// Operando o array com funções

array.push(11); // Adiciona um elemento no final do array
array.pop(); // removendo o último elemento no final do array
array.shift(); // remove o primeiro elemento do array
array.unshift(0); // adicina um elemento no início do array
array.splice(2,0,3); // adiciona um elemento na posição 2 do array



