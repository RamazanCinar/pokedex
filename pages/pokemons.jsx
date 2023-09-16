import { useState, useEffect } from "react";

import Header from "@/components/header";
import PokemonList from "@/components/pokemonsList";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        try {
          fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network error');
              }
              return response.json();
            })
            .then((data) => setPokemons(data.results))
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        } catch (error) {

          console.error('Error:', error);

        }
      }, []);

    return (
        <div>
        <Header />
            <h1>All Pokémons</h1>
            <PokemonList pokemons={pokemons} />
        </div>

        
    )
}