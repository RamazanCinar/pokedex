export default function Footer() {
    return (
        <div className="bg-red-500 text-white p-4 fixed bottom-0 left-0 w-full border-t-4 border-black">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Ramazan Cinar / Pokédex </p>
                <p> Data provided by <a href="https://pokeapi.co/" className="text-white hover:underline">PokeAPI</a></p>
            </div>
        </div>
    )
}