import React, { Component } from 'react';
import Axios from 'axios';
import './css/PokemonDetail.css';
import Navbar from './Navbar';

class PokemonDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            pokemon: [],
            image: '',
            types: [],
            stats: []
        };
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/' + this.props.location.pathname + '/')
        .then(response => {
            const pokemon = response.data;
            let types = pokemon.types.map(function(i) {return i.type.name})
            let stats = pokemon.stats.map(function(i) {return i})
            this.setState(
                {
                    pokemon: pokemon, 
                    image: pokemon.sprites.front_default,
                    types: types,
                    stats: stats,
                })
            console.log(this.state.pokemon)
        })
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                <div className="pokemon-info">
                    <h1># {this.state.pokemon.id} - {this.state.pokemon.name} 
                        <img alt="" src={this.state.image} />
                        {this.state.types.map((type, i) => 
                            <span key={i}>- {type}</span> 
                        )}
                    </h1>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="stats">
                        <h4>BASE STATS</h4>
                            <ul>
                                {
                                    this.state.stats.map((stat, i) =>
                                    <li key={i}>{stat.stat.name} - {stat.base_stat}</li>
                                )}   
                            </ul>    
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )   
    }
}

export default PokemonDetail