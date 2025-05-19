import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld.js'
import Character from './components/Character.js';


function App() {
    const name = "Willdanthê";
    const url_image = "https://i.pinimg.com/originals/b0/da/cd/b0dacd0bb277315b8582d2d0e07d62a8.gif";
  return (
    <div className="App">
      <header className="App-header">
        <a href="Desafio.html">Desafio</a>

        <h1>Nyan Cat</h1>
        <img src={url_image} className="App-logo" alt="Nyan-cat" />
        <h1>Diga "oi" ao <strong>Nyan Cat</strong>, {name.toUpperCase()}! </h1>
        <p>Nyan Cat quer somar 2 + 2, que é {((a,b) => { return a+b})(2,2)}</p>
        <HelloWorld name="React"/>
        <div className="characters">
          <Character name="Naruto" picture="https://images-ng.pixai.art/images/thumb/c2b1d308-85a9-43a8-a567-2cf70a5f59d1" alt="Naruto" profession="Hogake"/>
          <Character name="Luffy" picture="https://i.redd.it/manga-colored-luffy-done-by-me-v0-aye4n06gyhqc1.jpg?width=640&format=pjpg&auto=webp&s=8648ddfc37c2a89cc19c3a5d9f4ddce014be36cd" alt="Luffy" profession="King Of Pirates"/>
        </div>
      </header>
    </div>
  );
}

export default App;
