import PropTypes from 'prop-types';

import Image from "next/image"

export default function PokemonList({ pokemons }) {
    const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    
    return (
        <ul>{pokemons.map((pokemon, index) => (
            <li key={index}>
                {pokemon.id}
                {pokemon.name}
                <Image 
                    src={imageURL+`${index + 1}.svg`}
                    width={150}
                    height={150}
                    alt={`Image of ${pokemon.name}`}
                />
            </li>
        ))}   
    </ul>)

}

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};