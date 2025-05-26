import './App.css';
import { useState } from 'react';
import List from "./components/List/List.tsx"
import Evento from './features/events/Evento/Evento.js';
import Form from './features/events/Form/Form.js';

function App() {

    return (
    <>
      <List/>
      <Evento number={10}/>
      <Form/>
    </>
    )
}

export default App
    
