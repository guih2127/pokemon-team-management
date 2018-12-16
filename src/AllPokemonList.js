import React, { Component } from 'react';
import Axios from 'axios';
import './css/AllPokemonList.css';

class AllPokemonList extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
        };
    }

    componentDidMount() {


        Axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            let pokemons = response.data.results;
            pokemons = pokemons.filter((pokemon, i) => i < 151);
            this.setState({ pokemons });
            console.log(pokemons)
        })
    }

    render() {
        return(
            <div className="pokemonList">
                <div className="container">
                    <table className="table table-hover">
                    <thead>
                        <tr className="title">
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Número</th>
                        <th scope="col">Sprite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pokemons.map((pokemon, i) => 
                            <tr key={i}>
                                <th scope="row">{pokemon.name}</th>
                                <th scope="row"></th>
                            </tr>
                        )} 
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AllPokemonList
