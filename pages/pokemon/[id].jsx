import { useRouter } from 'next/router';

const PokemonDetails = ({ pokemon }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Error. Please try again later.</div>;
  }

  return (
    <div>
      <h1>Pokémon Details: {id}</h1>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonDetails;
