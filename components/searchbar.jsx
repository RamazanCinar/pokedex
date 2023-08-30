import { useState } from "react"

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="flex justify-center">
            <input
                className="pl-2 p-1 border rounded-full border-gray-600"
                type="text"
                placeholder="Search a pokemon"
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    )
}