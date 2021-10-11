import React, { Component } from 'react';
import './App.css';

class MeuNome extends Component {
    render() {
    const name = this.props.name
        return <p> Ola meu nome é <b>{ this.props.name }</b> <b>{ this.props.sobrenome}</b></p>;
    }
}
export default MeuNome;