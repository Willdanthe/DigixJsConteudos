
// Definição de tipo de função 
type Funcao = (a: number, b: number) => number;
const funcaoSoma: Funcao = (a, b) => {
    return a + b;
}


function soma(a: number, b: number): number {
    return a + b;
}

// Arrow Function
const somaArrow: Funcao = (a, b) => a + b;

// Função anônima
const somaAnonima: Funcao = function (a, b) {
    return a + b;
};

// soma com retorno implicito 
const somaRetornoImplicito: Funcao = (a, b) => a + b;

// soma com Parametros Opcionais
function somacomParametrosOpcionais(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    else
        return a;
}


// Vamos executar esse arquivo usando a ferramento deno, que é uma ferreamente de execução de TypeScript
// instalar o deno: iwr https://deno.land/install.ps1 -useb | iex
// executar: deno run Funcao.ts
// executar: deno Funcao.ts
// Executar com permissões: deno run --allow-read Funcao.ts