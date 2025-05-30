import './App.css';
import Contador from './components/Contador/Contador.jsx'
import UseEffectComponent from './components/UseEffectComponent/UseEffectComponent.jsx'
import { useState } from 'react';
import Condicional from './components/Condicional/Condicional.jsx';
import UseEffectExemplo2 from './components/UseEffectExemplo2/UseEffectExemplo2.jsx'
import UseEffectExemplo3 from './components/UseEffectExemplo3/UseEffectExemplo3.jsx';
import UseRefExemplo from './components/UseRef/UseRef.jsx'

function App() {
  const [isVisible, setIsVisible] = useState(true)
    return (
    <>
      <div className='hooks'>
        <h1>UseState</h1>
        <Contador/>
      </div>


      <div className='hooks'>
        <h1>UseEffect</h1>
        <div className='marg'>
          <h2>Exemplo 1</h2>
          {isVisible && <UseEffectComponent/>}
          <button onClick={() => setIsVisible(false)}>Clique aqui para Esconder</button>
          <button onClick={() => setIsVisible(true)}>Clique aqui para Voltar</button>
        </div>
        <div className='marg'>
          <h2>Exemplo 2</h2>
          <UseEffectExemplo2/>
        </div>
        <div className="marg">
          <h2>Exemplo 3</h2>
          <UseEffectExemplo3/>
        </div>          
      </div>

      <div className="hooks">
        <h1>UseRef</h1>
        <div className="marg">
          <h2>Exemplo 1</h2>
          <UseRefExemplo/>
        </div>
      </div>

      <div className='hooks'>
        <h1>Renderização por condição</h1>
        <Condicional/>
      </div>
    </>
    )
}

export default App
    
