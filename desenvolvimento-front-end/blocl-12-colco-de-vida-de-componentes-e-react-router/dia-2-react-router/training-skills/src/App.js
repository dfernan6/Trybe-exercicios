import React from 'react';
import './App.css';
// import mainPage from './componentes/mainPage'

class App extends React.Component {
  render (){
    return (
    <main className="App">
    <section className="login-form">
      <h1>Login</h1>
    </section>
    <section className="register-form">
      <h1>Register</h1>
    </section>
    </main>
    )
  }
}

export default App;
