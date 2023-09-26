/* eslint-disable react/prop-types */
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function PokemonCard({pokemonData}) {
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [pokemonType, setPokemonType] = useState('');

    useEffect(() => {
        async function fetchData() {
        try {
            const speciesResponse = await fetch(pokemonData.species.url);
            const speciesData = await speciesResponse.json();

            const description = speciesData.flavor_text_entries.find(
                (entry) => entry.language.name === 'en'
            );

            const type = speciesData.varieties[0].pokemon.type.name;

            setPokemonDescription(description.flavor_text);
            setPokemonType(type);
        } catch (error) {
            console.error('Error fetching species data', error);
        }
    }

    fetchData();
    }, [pokemonData.species.url]);
    return (
    <div className='mt-10 max-w-sm rounded overflow-hidden shadow-lg'>
          <Image 
            src={pokemonData.sprites.other.dream_world.front_default} 
            width={100}
            height={100}
            alt={`image of ${pokemonData.name}`}
            className='w-full p-5'
            />  
          <p className='font-bold text-xl mt-2'> #{pokemonData.id}</p>
          <p className='font-bold text-xl mb-2'>{pokemonData.name}</p>
          <p className='font-bold text-xl mb-2'>{pokemonDescription}</p>
          <p className='font-bold text-xl mb-2'>{pokemonType}</p>
    </div>


//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//   <img className="w-full" src="https://via.placeholder.com/150" alt="Pokemon" />
//   <div className="px-6 py-4">
//     <div className="font-bold text-xl mb-2">Pikachu</div>
//     <p className="text-gray-700 text-base">
//       Pikachu is an Electric-type Pokémon known for its yellow color and lightning bolt tail.
//     </p>
//   </div>
//   <div className="px-6 py-4">
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Electric</span>
//     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Mouse</span>
//   </div>
// </div>
    );
}