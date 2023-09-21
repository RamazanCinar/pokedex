'use client'

import SearchBar from '@/components/searchbar';
import Header from '@/components/header';

export default function Home () {
  return (
    <div className="">
      <Header />

      <h1 className='flex justify-center mx-auto'>
        Welcome to my Pokédex! You can explore and search for all 
        existing Pokémon and access the data you need. Have fun!
      </h1>

      <SearchBar />



    </div>
  )
}