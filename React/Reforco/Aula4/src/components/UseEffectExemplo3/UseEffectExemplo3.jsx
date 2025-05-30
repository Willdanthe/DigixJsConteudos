import { useEffect, useState } from "react";

function UseEffectExemplo2() {
    const [contador, setContador] = useState(0);
    const [user, setUser] = useState(null);

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
    // Sem o useEffect, esse fetch vai ficar fazendo a requisição várias vezes, então temos que colocá-lo dentro de um. e como o get só roda uma vez é bom colocalo para rodar uma só vez
    // fetch("https://api.github.com/users/willdanthe")
    //     .then((res) => res.json())
    //     .then((json) => setUser(json));

    useEffect(() => {
        fetch("https://api.github.com/users/willdanthe") // Veja o resultado em "network" do DevTools
            .then((res) => res.json())
            .then((json) => setUser(json));
    },[])


    useEffect(() => {
        

        return () => {
            
        };
    }, []);

    return (
        <>
            {user && (
            <>
                <h1>Perfil GitHub</h1>
                <h2>{user.login}</h2>
                <img src={user.avatar_url} alt="Foto perfil" />
                <br />
                <a href={user.html_url} target="_blank"> Link do Git</a>
            </>
            )}
        </>
    );
}

export default UseEffectExemplo2;
