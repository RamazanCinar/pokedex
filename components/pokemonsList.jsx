import PropTypes from 'prop-types';

import Link from "next/link";

export default function PokemonList({ pokemons }) {
    const imageURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    console.log(pokemons);
    
    return (
        <div className="flex justify-center gap-3">
        <ul className="grid grid-cols-3 gap-1">{pokemons.map((pokemon, index) => {
            const urlSegments = pokemon.url.split('/');
            const pokemonId = urlSegments[urlSegments.length - 2];

            return (
            <li className="mt-10 max-w-sm rounded-lg shadow-lg flex flex-col justify-center hover:transform hover:scale-110 hover:duration-150"key={index}>
                <Link href={`/pokemon/${pokemonId}`} >
                <img 
                    src={imageURL+`${pokemonId}.svg`}
                    alt={`Image of ${pokemon.name}`}
                    className="w-2/3 h-2/3 m-auto"
                    />
                <p className='m-6 flex justify-center text-xl sm:text-3xl'>{pokemon.name}</p>
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