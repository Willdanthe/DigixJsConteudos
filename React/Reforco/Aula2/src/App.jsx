import './App.css';
import { useState } from 'react';
import CardCharacters from './components/Character/Characters.jsx'
import SeuBotao from './components/SeuBotao/SeuBotao.jsx';



function WelcomeToTheMatoV1({nome, profissao = "TI"}) { // No parâmetro de profissão eu estou setando um default, caso profissão não seja chamado
  return(
    <>
    <h1>Com parametro comum</h1>
      <h1>Seja bem-vindo(a), {nome}!</h1>
      <p>Parabéns por sua excelente profissão de <strong>{profissao}</strong>!</p>
    </>
  )
}
function WelcomeToTheMatoV2(props) {
  return(
    <>
      <h1>Com parametro PROPS</h1>

      <h1>Seja bem-vindo(a), {props.nome}!</h1>
      <p>Parabéns por sua excelente profissão de <strong>{props.profissao}</strong>!</p>
    </>
  )
}

export default function App() {
  const nomeVariavel = "Danthê"
    return (
    <>
    <div>
      <h1>1- PROPS</h1>
      <WelcomeToTheMatoV1 nome="Will"/>
      <br/>
      <WelcomeToTheMatoV2 nome={nomeVariavel} profissao="Front-end"/>
      <h1>Undertale</h1>
      <div style={{display: 'flex', gap: '20px'}}>
          <CardCharacters src="https://art.pixilart.com/7850a81f9895ead.png" width={100} height={150} nome="Chara"/>
          <CardCharacters src="https://i.pinimg.com/originals/26/6d/b7/266db7af9a2931af657d672a161ee180.png" width={100} height={150} nome="Frisk"/>
      </div>
    </div>
    <div>
      <h1>2- Componentização</h1>
      <SeuBotao/>
    </div>


    </>
    )
}
    
