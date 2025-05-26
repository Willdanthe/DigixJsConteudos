import { useState } from "react";

function Contador() {
    const [valor, setValor] = useState(0)

    const incrementador = () => {
        setValor(valorAntigo => valorAntigo + 1)
    }
    const decrementador = () => {
        setValor(valorAntigo => valorAntigo - 1)
    }
    const zerar = () => {
        setValor(valorAntigo => valorAntigo = 0)
    }

    return(
        <div>
            <p>Contador: {valor}</p>
            <button onClick={incrementador}>+1</button>
            <button onClick={decrementador}>-1</button>
            <button onClick={zerar}>0</button>
        </div>
    )   
}

export default Contador