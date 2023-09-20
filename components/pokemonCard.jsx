/* eslint-disable react/prop-types */
import Image from 'next/image'

export default function PokemonCard({pokemonData}) {
    return (
    <div>
          <h2>Informations about the Pokémon :</h2>
          <p> Pokémon no : {pokemonData.id}</p>
          <p> Name : {pokemonData.name}</p>
          <Image 
            src={pokemonData.sprites.other.dream_world.front_default} 
            width={100}
            height={100}
            alt={`image of ${pokemonData.name}`}
            />  
    </div>
    );
}