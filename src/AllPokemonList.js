import React, { Component } from 'react';
import Axios from 'axios';
import './css/AllPokemonList.css';
import Navbar from './Navbar';


class AllPokemonList extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            value: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            let pokemons = response.data.results;
            pokemons = pokemons.filter((pokemon, i) => i < 151);
            this.setState({ pokemons });
        })
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.setState({pokemons:this.state.pokemons.filter(pokemon => pokemon.name.includes(e.target.value))})
    }

    render() {
        return(
            <div className="pokemonList">
                <Navbar onChange={this.onChange} value={this.state.value} pokemons={this.state.pokemons} />
                <div className="container">
                    <table className="table table-hover">
                    <thead>
                        <tr className="title">
                        <th scope="col">Número</th>
                        <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pokemons.map((pokemon, i) =>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th scope="row"><a href={"pokemon/" + (i + 1)}>{pokemon.name}</a></th>
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
