import { useState } from "react"

export default function SearchBar() {
    const [searchPokemon, setSearchPokemon] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState('');
    const handleSearchChange = (event) => {
        setSearchPokemon(event.target.value);
    }

    const handleSearchSubmit = async (event) => {
        event.preventDefault();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`);
        const data = await response.json();
        setPokemonData(data);
    } catch (error) {
        console.error('Error !!!!', error);
        setError("Erreur ! Veuillez entrer un pokémon valide")
    }
    console.log(pokemonData);
    };


    return (
        <div className="flex justify-center">
            <form onSubmit={handleSearchSubmit}>
                <input
                    className="pl-2 p-1 border rounded-full border-gray-600"
                    type="text"
                    placeholder="Search a pokemon"
                    value={searchPokemon}
                    onChange={handleSearchChange}
                />
            </form>

        {error && <p>{error}</p>}
        {pokemonData && (
        <div>
          <h2>Informations sur le Pokémon :</h2>
          <p>{pokemonData.id}</p>
          <p>{pokemonData.name}</p>
        </div>
      )}
        </div>
    )
}