import MainPage from './MainPage'
import CicloComponentes from './CicloComponentes'; 
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';

class Content extends React.Component {
render() {
    return (
       <main className="Content">
            <Switch>
                <Route path="/main-page" component= {MainPage} />
                <Route path="/ciclo-componentes" component= {CicloComponentes} />
                <Route path="/" exact component= { App } />
            </Switch>
        </main>
    )
  }
}

export default Content;