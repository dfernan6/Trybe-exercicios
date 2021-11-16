import React from 'react';
import './App.css';
import LoginForm from './componentes/LoginForm';
import RegisterForm from './componentes/RegisterForm';
import MainPage from './componentes/MainPage'
import CicloComponentes from './componentes/CicloComponentes'; 
import { BrowserRouter, Link }  from 'react-router-dom'

class App extends React.Component {
  render (){
    return (
    <main className="App">
      <LoginForm />
      <RegisterForm />
      <BrowserRouter>
      <Link to="/MainPage" component= {MainPage}><h4>Main Page</h4></Link>
      <Link to="/CicloComponentes" component= {CicloComponentes}><h4>Ciclo Componentes</h4></Link>
      <Link to="/" component= {App}><h3>Home</h3></Link>
      </BrowserRouter>
    </main>
    );
  }
}

export default App;
