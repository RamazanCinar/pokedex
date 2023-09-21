import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import PokemonCard from '@/components/pokemonCard';

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemonData, setPokemonData] = useState(null);

  const handlePreviousPokemon = () => {
    const previousPokemonId = parseInt(id) - 1;
    router.push(`/pokemon/${previousPokemonId}`);
  }

  const handleNextPokemon = () => {
    const nextPokemonId = parseInt(id) + 1;
    router.push(`/pokemon/${nextPokemonId}`);
  }

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
            <PokemonCard pokemonData={pokemonData} />
            <button onClick={handlePreviousPokemon}>Previous Pokémon</button>
            <button onClick={handleNextPokemon}>Next Pokémon</button>
    </div>
  );
};

export default PokemonDetails;
