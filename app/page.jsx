'use client'

import SearchBar from '@/components/searchbar';
import './globals.css';

import Link from 'next/link';

export default function Home () {
  return (
    <div className="">
      <h1 className="flex justify-center text-3xl text-red-500">Pokédex</h1>
      <ul className=" my-2 flex justify-center flex-wrap space-x-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemons">Pokémons</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <SearchBar />



    </div>
  )
}