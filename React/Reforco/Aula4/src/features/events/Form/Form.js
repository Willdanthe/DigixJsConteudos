function Form() {
    function CadastrarNome(e) {
        e.preventDefault()
        console.log("Nome Cadastrado!");
        
    }


    return(
        <div>
            <h1>Cadastro de Nome</h1>
            <form onSubmit={CadastrarNome}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form