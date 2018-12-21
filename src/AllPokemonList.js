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
            filtered: [],
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            let pokemons = response.data.results;
            pokemons = pokemons.filter((pokemon, i) => i < 151).map((pokemon, i) => ({ id: i + 1, name: pokemon.name }));
            this.setState({ pokemons, filtered: pokemons });
            console.log(this.state.pokemons)
        })
    }


    onChange(e) {
        this.setState({value: e.target.value}, this.filterPokemons);
    }

    filterPokemons() {
        const { pokemons, value } = this.state;
        this.setState({
            filtered: value.length > 0 ? pokemons.filter(
                (pokemon, i)  => pokemon.name.includes(value.toLowerCase())
            ) : pokemons
        });
    }

    render() {
        const { value, pokemons } = this.state;
        return(
            <div className="pokemonList">
                <Navbar onChange={this.onChange} value={value} />
                <div className="container">
                    <table className="table table-hover">
                    <thead>
                        <tr className="title">
                        <th scope="col">Número</th>
                        <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filtered.map((pokemon) =>
                            <tr key={pokemon.id}>
                                <th scope="row">{pokemon.id}</th>
                                <th scope="row"><a href={"pokemon/" + (pokemon.id)}>{pokemon.name}</a></th>
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
