import { useEffect, useRef, useState } from "react";

function UseRefExemplo() {
    const [contador, setContador] = useState(0);
    const [numero, setNumero] = useState(0);
    const [stateNumeroRef, setStateNumeroRef] = useState(0)

    const numeroRef = useRef(0);
    const buttonRef = useRef();
    const numeroAntigoRef = useRef(0)


    // console.log(numeroRef);

    useEffect(() => {
        // setNumero(prev => prev + 10)
        numeroRef.current = Math.random(); // Com o ref não cria um loop de renderização
    });

    // Referencia para elementos de dom 
    useEffect(() => {
        console.log(buttonRef.current.click()) // Já começa clicando no botão
    },[]);

    // Referencia do valor anterior

        useEffect(() => { // Como é uma função assíncrona, esse trecho de código vai ser executado antes do número realmente mudar o seu valor
            numeroAntigoRef.current = contador;
        }, [contador])


    return (
        <div>
            <h1>O contador é: {contador}</h1>
            <h1>O numero é: {numero}</h1>
            <h1>O numero REF é: {numeroRef.current}</h1>
            <h1>O numero antigo de REF era: {numeroAntigoRef.current}</h1>

            <button ref={buttonRef} onClick={() => setContador((prev) => prev + 1)}>
                Adicionar
            </button>

        </div>
    );
}

export default UseRefExemplo;
