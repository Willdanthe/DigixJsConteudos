function saudarTratado() {
    // Tenta obter o elemento com o id "nome"
    var input = document.getElementById("nome");

    // Verifica se o elemento existe e é um input
    if (input && input instanceof HTMLInputElement) {

        // Obter o valor do input
        var nome = input.value.trim();
        // Verificar se o nome está vazio
        if (nome === "") {
            alert("Por favor, digite seu nome");
            return; // Adiciona um retorno para evitar continuar a execução
        }

        // Exibe uma saudação com o nome
        alert(`Olá, ${nome}!`);
    } else {
        alert("Elemento com o id 'nome' não encontrado");
    }
}
