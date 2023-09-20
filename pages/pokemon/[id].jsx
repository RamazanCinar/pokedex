import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import PokemonCard from '@/components/pokemonCard';

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemonData, setPokemonData] = useState(null);

useEffect(() => {
    if (!id) return;

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error network');
        }
        return response.json();
    })
    .then((data) => {
        setPokemonData(data);
    })
    .catch((error) => {
        console.error('Error fetching data');
    });
}, [id])

if (!id) {
    return <div>Error. Please try again later.</div>;
  }

  if (!pokemonData) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      {/* <h1>Pokémon No: {id}</h1>
      <h2>Name: {pokemonData.name}</h2>
      <Image 
            src={pokemonData.sprites.other.dream_world.front_default} 
            width={100}
            height={100}
            alt={`image of ${pokemonData.name}`}
            />   */}
            <PokemonCard pokemonData={pokemonData} />
    </div>
  );
};

export default PokemonDetails;
