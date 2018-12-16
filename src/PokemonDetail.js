import React, { Component } from 'react';
import Axios from 'axios';
import './css/PokemonDetail.css';
import Navbar from './Navbar';

class PokemonDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            pokemon: []
        };
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/' + this.props.location.pathname + '/')
        .then(response => {
            const pokemon = response.data;
            this.setState(pokemon)
            console.log(pokemon)
        })
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1># {this.state.id} - {this.state.name}</h1>
                </div>
            </div>
        )   
    }
}

export default PokemonDetail