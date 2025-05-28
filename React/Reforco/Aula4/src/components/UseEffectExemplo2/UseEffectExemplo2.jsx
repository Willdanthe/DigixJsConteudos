import { useEffect, useState } from "react";

function UseEffectExemplo2() {
    const [contador, setContador] = useState(0);

    // 1 -  useEffect utilização
    useEffect(() => {
        // alert("Roda a cada Renderização")
        console.log("Algo mudou...");
    });

    // 2 - useEffect de dependências
    useEffect(() => {
        console.log("Só roda ao incrementar valor!!");
    }, [contador]); // Aqui ele está checando para ver se o contador mudou para rodar o useEffect

    // 3 - useEffect de dependências-> Array vazio só roda uma vez
    useEffect(() => {
        console.log("Só roda Uma vez");
    }, []);

    // 4 - clean up function, usempre que eu tenho algum evento que eu nao quero que seja visao depois de certo tempo  ou remover um botão que não quero que fique na tela usamos o clean up function
    useEffect(() => { // Esse "Modelo" de useEffect está analisando o contador, se ativarem ele uma vez e não ativarem dois de 2 segundos ele aciona o log, mas toda vez que apertarmos em um intervalo menor que 2 segundos ele reseta. 
        const timer = setTimeout(() => {
            console.log(`Ó incrementeador foi alterado ${contador}`);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [contador]);

    // 5 - Fetch com useEffect
    fetch()


    useEffect(() => {
        

        return () => {
            
        };
    }, []);

    return (
        <>
            <p>{contador}</p>
            <div>
                <button
                    style={{ width: "500px", height: "500px" }}
                    onClick={() => setContador((previous) => previous + 1)}
                >
                    Mais um
                </button>
            </div>
        </>
    );
}

export default UseEffectExemplo2;
