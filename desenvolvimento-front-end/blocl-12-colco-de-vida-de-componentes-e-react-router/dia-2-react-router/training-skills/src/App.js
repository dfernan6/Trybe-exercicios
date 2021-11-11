import React from 'react';
import './App.css';
import Body from './componentes/Body';
import Tittle from './componentes/Tittle';
import Image from './componentes/Image';

class App extends React.Component {
  render (){
    return (
    <div>
    <Tittle texto="Cabeçalho"/>
    <Body readings="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <Image src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alt=""/>
    </div>
    )
  }
}

export default App;
