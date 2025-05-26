import { useEffect, useState } from "react";

function UseEffectComponent(){
    const [valor, setValor] = useState('Initial Value');
    const [checado, setChecado] = useState(false);

    useEffect(() => {
        console.log('useEffect');

        return () => { // Para destruirmos o componente usamos este return
            console.log("Hello from Destruction");
            
        }

    }, []); // O segundo parâmetro [Lista], serve para poder checar se o componente dentro da lista foi atualizado para executar o useEffect e quando deixamos a lista vazia, quer dizer que a gente só quer que useEffect só seja ativado uma vez, que é quando o componente é criado

    return(
        <>
            <input type="text" 
            value={valor}
            onChange={(e)=>setValor(e.target.value)}/>
            
            <input type="checkbox" 
            checked={checado}
            onChange={(e) => setChecado(e.target.checked)}/>
        </>
)
}

export default UseEffectComponent