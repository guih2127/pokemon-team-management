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
        };
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/' + this.props.location.pathname + '/')
        .then(response => {
            const pokemon = response.data;
            this.setState({pokemon: pokemon, image: pokemon.sprites.front_default})
            console.log(this.state.sprites.front_default)
        })
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1># {this.state.pokemon.id} - {this.state.pokemon.name} <img src={this.state.image} />
                    </h1>
                </div>
            </div>
        )   
    }
}

export default PokemonDetail