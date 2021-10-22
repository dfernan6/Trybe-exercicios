import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeCliquesBl: 0,
      numeroDeCliquesBr: 0,
      numeroDeCliquesGi: 0,
    }
    this.Blonde = this.Blonde.bind(this)
    this.Brunet = this.Brunet.bind(this)
    this.Ginger = this.Ginger.bind(this)
    this.Confirm = this.Confirm.bind(this)
  }

  Blonde() {
    console.log('Loira!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBl: estadoAnterior.numeroDeCliquesBl + 1
    }))
  }
  
  Brunet() {
    console.log('Morena!')
    this.setState((estadoAnterior, _props) => ({
        numeroDeCliquesBr: estadoAnterior.numeroDeCliquesBr + 1
      }))
    }
  
  Ginger() {
    console.log('Ruiva!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesGi: estadoAnterior.numeroDeCliquesGi + 1
    }))
  }

  Confirm() {
    console.log(" Cadastro concluído!");
  }

  render() {
    return <div>
    <h1> Faça seu cadastro </h1>
    <button class="cButtons" onClick={this.Blonde}>Loira {this.state.numeroDeCliquesBl}</button>
    <button class="cButtons" onClick={this.Brunet}>Morena {this.state.numeroDeCliquesBr}</button>
    <button class="cButtons" onClick={this.Ginger}>Ruiva {this.state.numeroDeCliquesGi}</button>
    < Form />
    <button onClick={ this.Confirm } id="iEnviar" type="submit">Enviar</button>
    </div>
  }
}

export default App;
