import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import PokemonDetail from './PokemonDetail';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pokemon/:i" component={PokemonDetail} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
