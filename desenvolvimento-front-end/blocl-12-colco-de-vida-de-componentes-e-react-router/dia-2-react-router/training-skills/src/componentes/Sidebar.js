import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
    <div className="Sidebar">
        <Link to="/main-page" ><h4>Main Page</h4></Link>
        <Link to="/ciclo-componentes" ><h4>Ciclo Componentes</h4></Link>
        <Link to="/"><h3>Home</h3></Link>
    </div>
    )
  }
}

export default Sidebar;