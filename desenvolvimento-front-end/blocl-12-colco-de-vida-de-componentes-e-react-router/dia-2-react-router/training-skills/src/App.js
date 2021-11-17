import React from 'react';
import './App.css';
import LoginForm from './componentes/LoginForm';
import RegisterForm from './componentes/RegisterForm';
import { BrowserRouter }  from 'react-router-dom'
import Content from './componentes/Content';
import Sidebar from './componentes/Sidebar';

class App extends React.Component {
  render (){
    return (
    <BrowserRouter>
    <main className="App">
      <LoginForm />
      <RegisterForm />
      <Content />
      <Sidebar />
    </main>
    </BrowserRouter>
    );
  }
}

export default App;
