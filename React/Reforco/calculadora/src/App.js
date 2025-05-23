import logo from './logo.svg';
import './App.css';
import Sum from './Sum';

function App() {
  return (
    <div className="App">
      <h1> Calculadora de adição:</h1>
      <Sum number1={2} number2={1}/>
      <Sum number1={4} number2={3}/>
      <Sum number1={6} number2={5}/>
      <Sum number1={8} number2={7}/>
    </div>
  );
}

export default App;
