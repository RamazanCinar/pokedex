'use client'

import SearchBar from '@/components/searchbar';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home () {
  return (
    <>
      <Header />
      <div className='mt-10 py-6 w-full h-max md:w-4/6 mx-auto bg-red-500 rounded-t-lg'>
        <h1 className='flex justify-center mx-auto text-white  text-xl sm:text-3xl text-center sm:w-4/6'>
          Welcome to my Pokédex! You can explore and search for all 
          existing Pokémon and access the data you need. Have fun!
        </h1>
      </div>

      <SearchBar />

      <Footer />
    </>
  )
}