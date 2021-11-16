import React from 'react';
import './App.css';
import LoginForm from './componentes/LoginForm';
import RegisterForm from './componentes/RegisterForm';
// import mainPage from './componentes/mainPage'

class App extends React.Component {
  render (){
    return (
    <main className="App">
      <LoginForm />
      <RegisterForm />
    </main>
    );
  }
}

export default App;
