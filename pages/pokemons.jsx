import { useState, useEffect } from "react";

import Image from "next/image";

export default function Pokemons() {
    const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
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
                <li key={index}>
                    <Image 
                        src={imageURL+`${index + 1}.svg`}
                        width={150}
                        height={150}
                        alt={`Image of ${pokemon.name}`}
                    />
                    {pokemon.name}
                </li>
                ))}
            </ul>
        </div>

        
    )
}