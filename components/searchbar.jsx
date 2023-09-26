import { useState } from "react"
import PokemonCard from "./pokemonCard";

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
            setError(null);
            setSearchPokemon('');
        } catch (error) {
            console.error('Error !!!!', error);
            setError("Error ! Please enter a valid name")
            setPokemonData(null);
            setSearchPokemon('');
        }
        console.log(pokemonData);
    };
    
    
    return (
        <>
        <div className="flex justify-center flex-col">
            <form  className="flex justify-center w-4/6 mx-auto pb-3 bg-red-500 rounded-b-lg" onSubmit={handleSearchSubmit}>
                <input
                    className="text-lg p-2 m-2 w-2/4 border rounded-full border-gray-600"
                    type="text"
                    placeholder="Search a Pokémon"
                    value={searchPokemon}
                    onChange={handleSearchChange}
                    />
            </form>
        </div>

        <div className="flex justify-center">
        {error && <p>{error}</p>}
        {pokemonData && (

        <PokemonCard pokemonData={pokemonData} />
      )}
      </div>
      </>
    )
}