import { useState } from "react";

export default function SeuBotao(){
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Apertador do seu botão</h1>

    <p>Aperte seu botão quantas vezes você quiser</p>
    <p>Você apertou no seu botão {contador} vezes</p>

    <div>
      <button onClick={() => setContador(contador +1)}>Aperte seu botão</button>
    <br/>
    <br/>
      
      <button onClick={() => setContador(0)}>Zere as apertadas no seu botão</button>
    </div>

    </div>
  )
}