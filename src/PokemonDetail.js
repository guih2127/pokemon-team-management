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
        };
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/' + this.props.location.pathname + '/')
        .then(response => {
            const pokemon = response.data;
            let types = pokemon.types.map(function(i) {return i.type.name})
            this.setState(
                {
                    pokemon: pokemon, 
                    image: pokemon.sprites.front_default,
                    types: types,
                })
                console.log(this.state.types)
        })
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                <div className="name">
                    <h1># {this.state.pokemon.id} - {this.state.pokemon.name} 
                        <img alt="" src={this.state.image} />
                    </h1>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="types">
                            <h3>Tipos</h3>
                            <ul>
                                {
                                    this.state.types.map((type, i) =>
                                        <li key={i}>{type}</li>
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )   
    }
}

export default PokemonDetail