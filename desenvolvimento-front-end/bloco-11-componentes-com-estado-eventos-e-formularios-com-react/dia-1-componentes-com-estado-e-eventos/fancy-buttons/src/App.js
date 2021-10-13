import React from 'react';
import './App.css';


function Blonde() {
  console.log('Loira!')
}

function Brunet() {
  console.log('Morena!')
}

function Ginger() {
  console.log('Ruiva!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <div>
    <button onClick={Blonde}>Loira</button>
    <button onClick={Brunet}>Morena</button>
    <button onClick={Ginger}>Ruiva</button>
    </div>
  }
}

export default App;