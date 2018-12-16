import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Navbar';
import AllPokemonList from './AllPokemonList'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AllPokemonList />
      </div>
    );
  }
}

export default App;
