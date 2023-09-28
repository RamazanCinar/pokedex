import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import PokemonCard from '@/components/pokemonCard';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
    <>
      <Header />
      <Link href="/pokemons" className='mt-20 flex justify-center'>Back to Pokémon List</Link>
      <div className='flex justify-center'>
      <PokemonCard pokemonData={pokemonData} />
    </div>
    <div className='mt-3 flex justify-center space-x-2'>
      <button onClick={handlePreviousPokemon} className='w-48 p-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-800'>Previous Pokémon</button>
      <button onClick={handleNextPokemon} className=' w-48 p-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-800'>Next Pokémon</button>
      </div>
      <Footer />
      </>
  );
};

export default PokemonDetails;
