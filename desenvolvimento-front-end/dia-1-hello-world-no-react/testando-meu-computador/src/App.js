import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ReactClass from './Component'
import MeuNome from './MeuNome';

function App() {
  render()

  const myUser = ['Danilo','Fernandes']

  return (
  <section>
  <h1>Hello, World!</h1>
  <h3>Varg Vikernes</h3>
  < MeuNome name={ myUser[0] } sobrenome={ myUser[1] }/> 
  < ReactClass />
  </section>
  )
}
export default App;