import './App.css';
import Contador from './components/Contador/Contador.jsx'
import UseEffectComponent from './components/UseEffectComponent/UseEffectComponent.jsx'
import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true)
    return (
    <>
      <h1>UseState</h1>
      <Contador/>
      <h1>UseEffect</h1>
      {isVisible && <UseEffectComponent/>}
      <button onClick={() => setIsVisible(false)}>Clique aqui para Esconder</button>
    </>
    )
}

export default App
    
