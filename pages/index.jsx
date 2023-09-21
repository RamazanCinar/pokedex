'use client'

import SearchBar from '@/components/searchbar';
import Header from '@/components/header';

export default function Home () {
  return (
    <>
      <Header />
      <div className='mt-10 py-6 w-full md:w-4/6 mx-auto h-48 bg-red-500 rounded-lg'>
      <h1 className='flex justify-center mx-auto text-white  text-xl sm:text-3xl text-center sm:w-4/6'>
        Welcome to my Pokédex! You can explore and search for all 
        existing Pokémon and access the data you need. Have fun!
      </h1>

      <SearchBar />
</div>


    </>
  )
}