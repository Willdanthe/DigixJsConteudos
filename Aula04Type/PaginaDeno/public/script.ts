function saudarTratado(): void{
    // Tenta obter o elemrto com o id "nome"
    const input = document.getElementById("nome");

    // Verifica se o elemento foi exsite e é um input

    if (input && input instanceof HTMLInputElement) {
        // Obter o valor do input
        const nome = input.value.trim();

        // verificar se o elemento existe
        if (nome === "") {
            alert("Por favor, digite seu nome")
        }
    } else {
        alert("Elemento com o id 'nome' não encontrado");
        
    }

}