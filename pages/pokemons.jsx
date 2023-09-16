import { useState, useEffect } from "react";

import Header from "@/components/header";
import PokemonList from "@/components/pokemonsList";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage-1)*48}&limit=48`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network error');
                }
                const data = await response.json();
                setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
          fetchPokemons();
    },[currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
        <Header />
            <h1 className="text-center">All Pokémons</h1>
            <PokemonList pokemons={pokemons} />
            <button className="m-2 p-2 flex mx-auto bg-red-500 hover:bg-red-900"
            onClick={handleLoadMore}>Load more</button>
        </div>

        
    )
}