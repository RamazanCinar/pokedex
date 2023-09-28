/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function PokemonCard({pokemonData}) {
    const [pokemonDescription, setPokemonDescription] = useState('');

    const types = pokemonData.types;
    const bgColor = types[0].type.name;
    console.log(bgColor);

    useEffect(() => {
        async function fetchData() {
        try {
            const speciesResponse = await fetch(pokemonData.species.url);
            const speciesData = await speciesResponse.json();
            console.log(speciesData);
            
            let englishDescription = '';
            speciesData.flavor_text_entries.forEach(entry => {
                if (entry.language.name === 'en') {
                    englishDescription = entry.flavor_text;
                    return;
                    }
});

            setPokemonDescription(englishDescription);

        } catch (error) {
            console.error('Error fetching species data', error);
        }
    }

    fetchData();
    }, [pokemonData.species.url]);
    return (
    <div className='w-64 max-h-24-max sm:w-96 sm:h-max mt-10 rounded-lg overflow-y-auto shadow-lg flex flex-col'>
          <img 
            src={pokemonData.sprites.other.dream_world.front_default} 
            alt={`image of ${pokemonData.name}`}
            className="w-48 h-48 sm:w-72 p-5 m-auto"
            />  
          <p className='font-bold text-xl mt-1 p-1'> #{pokemonData.id}</p>
          <p className='font-bold text-xl mb-2 p-1'>{pokemonData.name}</p>
          <p className='text-sm font-bold sm:text-lg mb-2 p-1'>{pokemonDescription}</p>
          <ul className='p-2 space-x-2'>
          {types.map((entry, index) => (
                <li key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
                    {entry.type.name}
                </li>
            ))}
            </ul>
    </div>
    );
}

