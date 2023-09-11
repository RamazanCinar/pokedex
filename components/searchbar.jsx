import Image from "next/image";
import { useState } from "react"

export default function SearchBar() {
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/158.png`
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
        <div className="flex justify-center flex-col">
            <form  className="flex justify-center" onSubmit={handleSearchSubmit}>
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
            <div className="flex justify-center flex-col">
          <h2>Informations about the Pokémon :</h2>
          <p> Pokémon no : {pokemonData.id}</p>
          <p> Name : {pokemonData.name}</p>
          <Image 
            src={pokemonData.sprites.other.dream_world.front_default} 
            width={250}
            height={250}
            alt={`image of ${pokemonData.name}`}
            />  
        </div>
      )}
        </div>
    )
}