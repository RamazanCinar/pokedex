import { useState, useEffect } from "react";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then((response) => response.json())
        .then((data) => setPokemons(data.results));
    }, []);

    return (
        <div>
            <h1>All Pokémons</h1>
            <ul> {pokemons.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>

        
    )
}