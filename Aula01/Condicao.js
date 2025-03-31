let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

// Condição Ternário
let podeVotar = (idade >= 18) ? "Pode Votar" : "Não pode votar";


// Ternário com 2 condições 
let podeVotar2 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente! Não pode votar" : "Criança";

// Ternário com 3 condições 
let podeVotar3 = (idade >= 18 && idade <= 70) ? "Pode votar" : "Não pode votar";

let podeVotar4 = (idade >= 18 || idade <= 70) ? "Não pode votar" : "Pode votar";

let podeVotar5 = (idade != 18) ? "Não tem 18" : "tem 18";


let dia = 5;

// Ternário com Operadores Lógicos

switch (dia) {
    case 1:
        console.log("Domingo!? Mas já!");
        break;
    case 2:
        console.log("Segunda!? Mas já!");
        break;
    case 3:
        console.log("Terça!? Mas já!");
        break;
    case 4:
        console.log("Captain, It's Wednesday");
        break;
    case 5:
        console.log("Quinta!? Mas já!");
        break;
    case 6:
        console.log("Sexta!? Mas já!");
        break;
    case 7:
        console.log("Sábado!? Mas já!");
        break;
    default:
        console.log("Dia inválido!");
        break;

}
