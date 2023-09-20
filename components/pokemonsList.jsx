import PropTypes from 'prop-types';

import Link from "next/link";
import Image from "next/image";

export default function PokemonList({ pokemons }) {
    const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    console.log(pokemons);
    
    return (
        <div className="flex justify-center gap-3">
        <ul className="grid grid-cols-3 gap-1">{pokemons.map((pokemon, index) => {
            const urlSegments = pokemon.url.split('/');
            const pokemonId = urlSegments[urlSegments.length - 2];
            console.log(pokemonId);

            return (
            <li className=" p-3 border-2 border-black"key={index}>
                <Link href={`/pokemon/${pokemonId}`} >
                {pokemonId}
                {pokemon.name}
                <Image 
                    src={imageURL+`${pokemonId}.svg`}
                    width={100}
                    height={100}
                    alt={`Image of ${pokemon.name}`}
                    />
                </Link>
            </li>
            )
        })}   

    </ul>
    </div>)

}

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};