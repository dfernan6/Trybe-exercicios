import React from 'react';
import './App.css';
import ReactClass from './Component'

function App() {

  function cabecalho() {
  return < ReactClass />
}
  return (<div>
  <h1>Hello, World!</h1>
  <p> {cabecalho()}</p>
  </div>)
}
export default App;