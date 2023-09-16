import { useState, useEffect } from "react";

import Header from "@/components/header";
import PokemonList from "@/components/pokemonsList";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then((response) => response.json())
        .then((data) => setPokemons(data.results));
    }, []);

    return (
        <div>
        <Header />
            <h1>All Pokémons</h1>
            <PokemonList pokemons={pokemons} />
        </div>

        
    )
}