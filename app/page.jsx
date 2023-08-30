import './globals.css';

import Link from 'next/link';

export default function Home () {
  return (
    <div className="">
      <h1 className="flex justify-center text-3xl text-red-500">Pokédex</h1>
      <ul className=" my-2 flex justify-center flex-wrap space-x-3">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/pokemons">Liste des Pokémon</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
      </ul>

      

    </div>
  )
}