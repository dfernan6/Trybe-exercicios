import React from 'react';
import './App.css';

class App extends React.Component {
  Blonde() {
    console.log('Loira!')
  }
  
  Brunet() {
    console.log('Morena!')
  }
  
  Ginger() {
    console.log('Ruiva!')
  }
  render() {
    return <div>
    <button onClick={this.Blonde}>Loira</button>
    <button onClick={this.Brunet}>Morena</button>
    <button onClick={this.Ginger}>Ruiva</button>
    </div>
  }
}

export default App;