import React from 'react';
import './App.css';
import Body from './componentes/Body';
import Tittle from './componentes/Tittle';
import Image from './componentes/Image';
import Training from './componentes/Training';
import colors from './componentes/Colors';

class mainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filterInput:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
    
    this.setState({ filterInput: event.target.value });
  }

  render (){
    const { filterInput } = this.state;
    return (
    <main>
    <div>
    <Tittle texto="Cabeçalho"/>
    <Body readings="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud
     exercitation ullamco laboris nisi ut aliquip 
     ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident,
     sunt in culpa qui officia deserunt mollit 
     anim id est laborum." />
    <Training />
    <Image />
    </div>
    < input
      onChange={ this.handleChange }
      value={ filterInput } 
      type="text" 
      />
    <ul>
      {colors
        .filter((color) => color.name.includes(filterInput))
        .map((color) => (
        <li key={ color.hex }>
          <div style={ { background: color.hex } } className="color-display" />
          { color.name }</li>
      ))}
    </ul>
    </main>
    )
  }
}

export default mainPage;
