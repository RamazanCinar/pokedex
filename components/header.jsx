import Link from "next/link"

export default function Header() {
    return (
        <div>
            <h1 className=" bg-red-500 flex justify-center text-7xl text-white font-bold  p-5">Pokédex</h1>
            <ul className=" text-2xl sm:text-3xl p-2 flex justify-center flex-wrap space-x-8 border-t-4 border-black">
                <li className="hover:text-red-500">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-red-500">
                    <Link href="/pokemons">Pokémons</Link>
                </li>
                <li className="hover:text-red-500">
                <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}