import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      suaCidade:'',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito?
              <textarea name="estadoFavorito" id="iEstado" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Qual a sua cidade?
              <textarea name="suaCidade" id="iCidade" value={this.state.suaCidade } onChange={this.handleChange} />
          </label>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;