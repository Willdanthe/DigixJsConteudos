function Evento({number}) {
    function meuEvento() {
        console.log("Botão Ativado!")
        alert(`Botão Ativado! ${number} milisegundos para a explosão!`)

        for (let i = number; i >= 0; i--) {
            console.log(`${i} milisegundos para explodir!`)

        }
        alert("BOooooooooooooooooooooooooooMMM!!!!!!!!!!💥💥💥💥💥💥💥💥");
        
    }

    function BotaoAnonimo({message, children}){
        return(
            <button onClick={() => alert(message)}>{children}!</button>
        )
    }

    function BotaoPokemon({onPokebola, children}) {
        return(
            <button onClick={onPokebola}>
                {children}
            </button>
        )
    }

    function Its() {
        alert("It's Pikachu!")
        document.body.innerHTML += `<img src="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg" alt="" />`
    }

    function WhoSthatPokemon() {
        return(
            <BotaoPokemon onPokebola={Its}>
                Quem é este pokemon?
            </BotaoPokemon>
        )
    }

    return (
        <div>
            <p>Clique aqui para acionar um evento:</p>
            <button onClick={meuEvento}>Ativar com função!</button>
            <BotaoAnonimo message="Botao anônimo ativado">
            Botão Anônimo
            </BotaoAnonimo>
            <WhoSthatPokemon/>
        </div>      
    )
}

export default Evento